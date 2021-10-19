
#This software uses https://github.com/SamYuen101234/Masked_Face_Recognition
import torch
import torch.nn as nn
#from torchsummary import summary
from torch.nn import functional as F
from torch.nn.parameter import Parameter
# InceptionResnetV1 (a model pre-trained for face recognition)
from facenet_pytorch import MTCNN, InceptionResnetV1

class InceptionResnet(nn.Module):
    def __init__(self, device, pool=None, dropout=0.3, pretrain=True):
        super(InceptionResnet, self).__init__()
        if pretrain:
            self.net = InceptionResnetV1(pretrained='vggface2', dropout_prob=dropout, device=device)
        else:
            self.net = InceptionResnetV1(dropout_prob=dropout, device=device)
        self.out_features = self.net.last_linear.in_features
        if pool == 'gem':
            self.net.avgpool_1a = GeM(p_trainable=True)
    def forward(self, x):
        
        return self.net(x)
class FaceNet2(nn.Module):
    def __init__(self, num_classes, model_name=None, pool=None, dropout=0.0, embedding_size=512, device='cuda', pretrain=True):
        super(FaceNet2, self).__init__()
        self.model_name = model_name
        self.model = InceptionResnet(device, pool=pool, dropout=dropout, pretrain=pretrain)

        # global pooling
        if(pool == "gem"):
            # Generalizing Pooling
            self.global_pool = GeM(p_trainable=True)
        else:
            # global average pooling
            self.global_pool = nn.AdaptiveAvgPool2d(1)
        # neck
        self.neck = nn.Sequential(
                nn.Linear(self.model.out_features, embedding_size, bias=True),
                nn.BatchNorm1d(embedding_size, eps=0.001),
            )
        self.dropout = nn.Dropout(p=dropout)

        self.head = ArcMarginProduct(embedding_size, num_classes)
        
    def forward(self, x):   
        # backbone
        if self.model_name == None:
            embeddings = self.model(x)
            logits = self.head(embeddings)
            return {'logits': logits, 'embeddings': embeddings}

        x = self.model(x)
        # global pool
        x = self.global_pool(x)
        x = self.dropout(x)
        # change the output from cnn to a vector first
        x = x[:,:,0,0]
        # neck
        embeddings = self.neck(x)
        # vector with num_classes
        logits = self.head(embeddings)
        return {'logits': logits, 'embeddings': embeddings}
class ArcMarginProduct(nn.Module):
    def __init__(self, in_features, out_features):
        super().__init__()
        self.weight = nn.Parameter(torch.Tensor(out_features, in_features))
        self.reset_parameters()

    def reset_parameters(self):
        nn.init.xavier_uniform_(self.weight)

    def forward(self, features):
        cosine = F.linear(F.normalize(features), F.normalize(self.weight))
        return cosine
