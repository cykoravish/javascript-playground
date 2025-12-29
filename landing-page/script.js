// Import GSAP and ScrollTrigger
const gsap = window.gsap
const ScrollTrigger = window.gsap.ScrollTrigger

// ===== GSAP Registration =====
gsap.registerPlugin(ScrollTrigger)

// ===== DOM Elements =====
const navbar = document.getElementById("navbar")
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const marqueeTrack = document.getElementById("marqueeTrack")

// ===== Navbar Scroll Effect =====
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  lastScroll = currentScroll
})

// ===== Mobile Menu Toggle =====
mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active")
  mobileMenu.classList.toggle("active")
})

// Close mobile menu on link click
document.querySelectorAll(".mobile-nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active")
    mobileMenu.classList.remove("active")
  })
})

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// ===== Hero Animations =====
const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } })

heroTimeline
  .to(".hero-badge", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
  })
  .to(
    ".title-line",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
    },
    "-=0.4",
  )
  .to(
    ".hero-subtitle",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    },
    "-=0.4",
  )
  .to(
    ".hero-ctas",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    },
    "-=0.4",
  )
  .to(
    ".hero-stats",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    },
    "-=0.4",
  )
  .to(
    ".scroll-indicator",
    {
      opacity: 1,
      duration: 0.8,
    },
    "-=0.2",
  )

// ===== Stat Counter Animation =====
const statValues = document.querySelectorAll(".stat-value")

statValues.forEach((stat) => {
  const target = Number.parseFloat(stat.dataset.count)
  const isDecimal = target % 1 !== 0

  gsap.to(stat, {
    innerHTML: target,
    duration: 2,
    delay: 1,
    snap: isDecimal ? { innerHTML: 0.1 } : { innerHTML: 1 },
    scrollTrigger: {
      trigger: stat,
      start: "top 80%",
    },
  })
})

// ===== Section Animations =====
// Section headers
gsap.utils.toArray(".section-header").forEach((header) => {
  gsap.from(header.children, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: header,
      start: "top 80%",
    },
  })
})

// Feature cards
gsap.utils.toArray(".feature-card").forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    delay: index * 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
  })
})

// ===== Card Tilt Effect =====
document.querySelectorAll("[data-tilt]").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)"
  })
})

// ===== Magnetic Button Effect =====
document.querySelectorAll(".magnetic-btn").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    })
  })

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    })
  })
})

// ===== Showcase Section Animations =====
const showcaseContent = document.querySelector(".showcase-content")

if (showcaseContent) {
  // Code window animation
  gsap.from(".code-window", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".showcase-visual",
      start: "top 70%",
    },
  })

  // Stats bar fill animation
  gsap.utils.toArray(".showcase-stat-fill").forEach((fill) => {
    const width = fill.dataset.width

    gsap.to(fill, {
      width: width + "%",
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: fill,
        start: "top 85%",
      },
    })
  })

  // Showcase text animation
  gsap.from(".showcase-text", {
    opacity: 0,
    x: 60,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".showcase-text",
      start: "top 70%",
    },
  })

  // Showcase list items
  gsap.from(".showcase-list li", {
    opacity: 0,
    x: 30,
    duration: 0.6,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".showcase-list",
      start: "top 80%",
    },
  })
}

// ===== Pricing Cards Animation =====
gsap.utils.toArray(".pricing-card").forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    delay: index * 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
  })
})

// ===== CTA Section Animation =====
const ctaContent = document.querySelector(".cta-content")

if (ctaContent) {
  gsap.from(".cta-content", {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".cta",
      start: "top 70%",
    },
  })
}

// ===== Footer Animation =====
gsap.from(".footer-grid > *", {
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".footer",
    start: "top 85%",
  },
})

// ===== Parallax Effect on Hero Glows =====
window.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / window.innerWidth - 0.5
  const mouseY = e.clientY / window.innerHeight - 0.5

  gsap.to(".hero-glow-1", {
    x: mouseX * 50,
    y: mouseY * 50,
    duration: 1,
    ease: "power2.out",
  })

  gsap.to(".hero-glow-2", {
    x: mouseX * -30,
    y: mouseY * -30,
    duration: 1,
    ease: "power2.out",
  })
})

// ===== Initialize =====
document.addEventListener("DOMContentLoaded", () => {
  // Refresh ScrollTrigger after all content loads
  ScrollTrigger.refresh()
})

// Handle resize
window.addEventListener("resize", () => {
  ScrollTrigger.refresh()
})
