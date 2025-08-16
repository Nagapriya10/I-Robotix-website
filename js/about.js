// Slide down navbar on page load
gsap.from("#mainNavbar", {
  y: -100,
  duration: 1,
  ease: "power2.out"
});

// Animate text and robot on load
gsap.from(".hero-heading", { y: 50, opacity: 0, duration: 1 });
gsap.from(".hero-subtext", { y: 30, opacity: 0, duration: 1, delay: 0.3 });
gsap.from(".btn-get-in-touch", { scale: 0.8, opacity: 0, duration: 0.5, delay: 0.6 });
gsap.from(".robot-img", { x: 100, opacity: 0, duration: 1, delay: 0.5 });

// Background parallax animation
gsap.to(".hero-section", {
  backgroundPosition: "50% 80%",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    scrub: true
  }
});


// Animate About Section on scroll
gsap.from(".about-heading", {
  scrollTrigger: ".about-heading",
  x: -50,
  opacity: 0,
  duration: 1
});

gsap.from(".about-text", {
  scrollTrigger: ".about-text",
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.2
});

gsap.from(".about-img", {
  scrollTrigger: ".about-img",
  x: 50,
  opacity: 0,
  duration: 1,
  delay: 0.3
});

// Animate Course Cards on scroll
gsap.utils.toArray(".course-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.2
  });
});

gsap.utils.toArray(".course-card").forEach((card, i) => {
  gsap.fromTo(card,
    { opacity: 0, y: 50 },
    {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none reverse"
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: i * 0.2
    }
  );
});
gsap.utils.toArray(".project-tile").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: i * 0.2
  });
});

  gsap.from("#contactBanner", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#contactBanner",
      start: "top 80%"
    }
  });


ScrollReveal().reveal('.intro-video', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.intro-text', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 300,
  easing: 'ease-in-out'
});

// Scroll animation for the student project video
ScrollReveal().reveal('.student-project-section', {
  delay: 200,          // Wait 200ms before animation starts
  distance: '50px',    // Move 50px while appearing
  origin: 'bottom',    // Comes from the bottom
  duration: 1000,      // Animation duration (1 second)
  scale: 0.9,          // Slight zoom effect
  opacity: 0,          // Start invisible
  reset: false         // Animation happens only once
});
// Smooth scroll from navbar
document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

// Animate contact section when visible
ScrollReveal().reveal('.contact-section', {
  delay: 200,
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
  reset: false
});


document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".business-intelligence");

  function handleScroll() {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("show");
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});


document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarToggler = document.querySelector('.navbar-collapse');
    const bsCollapse = bootstrap.Collapse.getInstance(navbarToggler);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const connectBtn = document.getElementById("connectBtn");
  const contactCard = document.getElementById("contactCard");
  let timeout;

  connectBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (contactCard.style.display === "block") {
      contactCard.style.display = "none";
      clearTimeout(timeout);
    } else {
      contactCard.style.display = "block";

      // Auto-hide after 5 seconds
      timeout = setTimeout(() => {
        contactCard.style.display = "none";
      }, 5000);
    }
  });
});

  // Your YouTube video data
  const videos = [
    { id: "qMF1yeF8gJs", title: "IRobotix", desc: "Real-time Project Showcase" },
    { id: "mRXnEawn2AQ", title: "IRobotix", desc: "Students demoing AI-powered robotics in real-time" },
    { id: "NkBs8SH_KwI", title: "IRobotix", desc: "Real-world automation project by engineering students" },
    { id: "zTaHz9WhiaM", title: "IRobotix", desc: "Next-gen smart robotics with hands-on coding" },
    { id: "sHqqvfn3c98", title: "IRobotix", desc: "Founder’s journey — from idea to innovation 💡" },
    { id: "dWif4047W-U", title: "IRobotix", desc: "Inspiring story of our founder’s path in robotics 🚀" },
  ];

  const container = document.querySelector(".video-grid");

  videos.forEach(video => {
    const videoCard = document.createElement("div");
    videoCard.classList.add("video-card");
    videoCard.setAttribute("data-aos", "fade-up");

    videoCard.innerHTML = `
      <img class="video-thumb" src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${video.title}">
      <div class="video-overlay">
        <div class="video-text">
          <h3>${video.title}</h3>
          <p>${video.desc}</p>
        </div>
      </div>
      <span class="play-icon">&#9658;</span>
    `;

    videoCard.addEventListener("click", () => {
      window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank");
    });

    container.appendChild(videoCard);
  });

