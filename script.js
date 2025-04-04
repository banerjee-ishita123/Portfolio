document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("video");
  console.log("Found videos:", videos.length);
});

document.addEventListener('DOMContentLoaded', () => {
  const video1 = document.getElementById('projectvideo1');
  const video2 = document.getElementById('projectvideo2');
  const video3 = document.getElementById('projectvideo3');
  const video4 = document.getElementById('projectvideo4');

  const videolist = [video1, video2, video3, video4].filter(video => video); // Removes null values

  videolist.forEach(video => {
    video.muted = true; // Mute video to ensure autoplay is allowed
    video.addEventListener('mouseover', () => {
      video.play(); // Start video on hover
    });
  
    video.addEventListener('mouseout', () => {
      video.pause(); // Pause video on mouse out
      video.currentTime = 0; // Reset to start
    });
  });
});
console.log("JS file loaded correctly!");
