var video = document.getElementById("background-video");
var btn = document.getElementById("stopButton");

function pauseMovie() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


