let myVideos = ["https://github.com/ceLLro/web-essentials/blob/master/video-background/files/videos/1.mov", "https://github.com/ceLLro/web-essentials/blob/master/video-background/files/videos/2.mov"]
let videoPlayer = document.getElementById("main-background-video");

for (let index = 0; index < myVideos.length; index++) {
    videoPlayer.src = myVideos[index];
    
}



