const video = document.getElementById('video')

function startVideo() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err) {
        console.log(err);
      });
}

startVideo()