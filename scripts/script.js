const banner = document.querySelector(".banner");

const video = document.createElement("video");

video.src = "./video/bg_video.mp4";
video.loop = true;
video.playsInline = true;
video.muted = true;
video.autoplay = true;
video.autoplay = true;

video.classList.add("bg_video");

banner.appendChild(video);
