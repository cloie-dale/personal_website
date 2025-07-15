document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("themeToggle")
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")

  // Check for saved theme preference or use the system preference
  const currentTheme = localStorage.getItem("theme") || (prefersDarkScheme.matches ? "dark" : "light")

  // Set initial theme
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark")
  } else {
    document.documentElement.setAttribute("data-theme", "light")
  }

  // Toggle theme when button is clicked
  themeToggle.addEventListener("click", () => {
    let theme = "light"

    if (document.documentElement.getAttribute("data-theme") === "light") {
      theme = "dark"
    }

    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  })

  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const body = document.querySelector("body")

  // Create mobile nav if it doesn't exist
  if (!document.querySelector(".mobile-nav")) {
    const mobileNav = document.createElement("div")
    mobileNav.className = "mobile-nav"

    const closeBtn = document.createElement("div")
    closeBtn.className = "close-btn"
    closeBtn.innerHTML = "&times;"

    const navLinks = document.querySelector(".nav-links").cloneNode(true)
    navLinks.className = "mobile-nav-links"

    mobileNav.appendChild(closeBtn)
    mobileNav.appendChild(navLinks)
    body.appendChild(mobileNav)

    // Close button event
    closeBtn.addEventListener("click", () => {
      mobileNav.classList.remove("active")
      body.style.overflow = "auto"
    })

    // Mobile nav links event
    const mobileNavLinks = mobileNav.querySelectorAll("a")
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active")
        body.style.overflow = "auto"
      })
    })
  }

  const mobileNav = document.querySelector(".mobile-nav")

  // Hamburger click event
  hamburger.addEventListener("click", () => {
    mobileNav.classList.add("active")
    body.style.overflow = "hidden"
  })

  // Sticky Header
  const header = document.querySelector("header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.padding = "15px 0"
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.padding = "20px 0"
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    }
  })

  // Project Filtering
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      const filter = this.getAttribute("data-filter")

      projectCards.forEach((card) => {
        if (filter === "all") {
          card.style.display = "block"
        } else if (card.getAttribute("data-category") === filter) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  })

  // Form Submission (for demo purposes)
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Simple validation
      if (name && email && subject && message) {
        // In a real application, you would send this data to a server
        alert("Thank you for your message! I will get back to you soon.")
        contactForm.reset()
      } else {
        alert("Please fill in all fields.")
      }
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight
        const targetPosition = targetElement.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Animation on scroll
  const animateOnScroll = () => {
    const sections = document.querySelectorAll("section")

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (sectionTop < windowHeight * 0.75) {
        section.classList.add("animate")
      }
    })
  }

  // Initial check for elements in view
  animateOnScroll()

  // Check on scroll
  window.addEventListener("scroll", animateOnScroll)
})
