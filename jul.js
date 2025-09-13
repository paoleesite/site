const audio = document.getElementById("julMusic");
const gifs = document.querySelectorAll(".clickable-gif");
const musicToggle = document.getElementById("music-toggle");
const intro = document.querySelector(".intro");
const content = document.querySelector(".content");

 
window.addEventListener('DOMContentLoaded', () => {
  intro.style.opacity = 1;
  content.style.opacity = 1;
});

 
document.addEventListener('click', () => {
  if (audio.muted) {
    audio.muted = false;
    audio.play();
  }
}, { once: true });

 
gifs.forEach(gif => {
  gif.addEventListener('click', () => {
    if (!audio.paused) audio.pause();
  });
});

 
musicToggle.addEventListener('click', () => {
  if (audio.paused) audio.play();
  else audio.pause();
});
