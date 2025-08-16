// ✅ Count-up Animation on Scroll
const counters = document.querySelectorAll(".counter");
let hasCounted = false;

function runCounters() {
  if (hasCounted) return;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const speed = 30;

      if (count < target) {
        counter.innerText = Math.ceil(count + target / speed);
        setTimeout(updateCount, 50);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

  hasCounted = true;
}

// ✅ Trigger when stats section is visible
window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".stats-section");
  const sectionTop = statsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    runCounters();
  }
});



  // Animate Founder Image (from left)
  ScrollReveal().reveal('.founder-image-box', {
    origin: 'left',
    distance: '80px',
    duration: 1200,
    delay: 200,
    easing: 'ease-in-out',
    reset: false
  });

  // Animate Info Box (from right)
  ScrollReveal().reveal('.founder-info-box', {
    origin: 'right',
    distance: '80px',
    duration: 1200,
    delay: 300,
    easing: 'ease-in-out',
    reset: false
  });

  // Animate Button (from bottom)
  ScrollReveal().reveal('.btn-connect', {
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 500,
    easing: 'ease-in-out',
    reset: false
  });


  ScrollReveal().reveal('.timeline-item', {
    delay: 100,
    distance: '40px',
    origin: 'left',
    duration: 1000,
    interval: 200
  });



