// Video popup functions
function openVideo() {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoIframe");
  iframe.src = "assets/course-video.mp4"; // Add your own video link here
  modal.style.display = "flex";
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoIframe");
  iframe.src = ""; // Stop video
  modal.style.display = "none";
}

// ScrollReveal animation (if you want extra effects)
ScrollReveal().reveal('.reveal', {
  distance: '60px',
  duration: 1200,
  easing: 'ease-in-out',
  origin: 'bottom',
  reset: false
});

// ✅ AOS setup — all courses fade in together
AOS.init({
  duration: 800,
  once: true,
  delay: 0
});
