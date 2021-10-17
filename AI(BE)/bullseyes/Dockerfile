# syntax=docker/dockerfile:1
FROM python:3.8
ENV PYTHONUNBUFFERED=1
WORKDIR /APP
COPY requirements.txt /APP
RUN pip install --upgrade pip
RUN python -m pip install --upgrade pip setuptools wheel
RUN pip install -r requirements.txt
RUN pip install --no-cache-dir \
                    torch \
                    torchvision \
    -f https://download.pytorch.org/whl/torch_stable.html
RUN pip install facenet-pytorch
COPY . /APP/