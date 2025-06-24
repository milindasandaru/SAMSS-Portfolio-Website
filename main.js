/** resume section */
document.addEventListener('DOMContentLoaded', function () {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.resume-tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all tabs and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const seeMoreBtns = document.querySelectorAll('.service-see-more');
    const modalBackdrops = document.querySelectorAll('.service-modal-backdrop');
    const closeBtns = document.querySelectorAll('.modal-close-btn');

    // Open modals
    seeMoreBtns.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            modalBackdrops[index].classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modals
    closeBtns.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            modalBackdrops[index].classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Close modal when clicking backdrop
    modalBackdrops.forEach((backdrop) => {
        backdrop.addEventListener('click', function (e) {
            if (e.target === backdrop) {
                backdrop.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Tabs filtering
    const filterBtns = document.querySelectorAll('.portfolio-tabs .tab-btn');
    const portfolioContainer = document.querySelector('.portfolio-container');
    const portfolioCards = portfolioContainer.querySelectorAll('.card-with-modal');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Filter portfolio cards
            portfolioCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.classList.remove('hide');
                    card.classList.add('show');
                } else {
                    card.classList.remove('show');
                    card.classList.add('hide');
                }
            });
        });
    });

    // Initialize - show all cards
    portfolioCards.forEach(card => card.classList.add('show'));

    // Modal open/close
    const portfolioModalBackdrop = document.querySelector('.portfolio-modal-backdrop');
    const modalCloseBtn = portfolioModalBackdrop.querySelector('.modal-close-btn');
    const modalImg = portfolioModalBackdrop.querySelector('.modal-img img');
    const modalCategory = portfolioModalBackdrop.querySelector('.project-category');
    const modalTitle = portfolioModalBackdrop.querySelector('.project-title');
    const modalDescription = portfolioModalBackdrop.querySelector('.project-description');
    const modalFeatures = portfolioModalBackdrop.querySelector('.project-features');
    const modalLinks = portfolioModalBackdrop.querySelector('.project-links');

    // Sample project data - update this with your actual projects
    const projects = [
        {
            category: "Web Design",
            title: "Dynamic",
            description: "A responsive website design with modern aesthetics and user-friendly interface.",
            features: [
                "Responsive Layout Design",
                "Color Schemes & Typography",
                "Visual Hierarchy",
                "Design Mockups (Figma, Adobe XD)"
            ],
            links: [
                { text: "Live Demo", url: "#", icon: "ri-global-line" },
                { text: "Source Code", url: "#", icon: "ri-github-fill" }
            ],
            image: "asset/portfolio-img-01.jpg"
        },
        {
            category: "UI/UX Design",
            title: "Submarine",
            description: "Creative UI/UX design focused on user experience and usability.",
            features: [
                "User Research",
                "Wireframing & Prototyping",
                "Interactive Design",
                "Usability Testing"
            ],
            links: [
                { text: "Live Demo", url: "#", icon: "ri-global-line" },
                { text: "Source Code", url: "#", icon: "ri-github-fill" }
            ],
            image: "asset/portfolio-img-02.jpg"
        },
        // Add other projects similarly...
    ];

    // Open modal on card click
    portfolioCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const project = projects[index];
            if (!project) return; // safety check

            modalImg.src = project.image;
            modalImg.alt = project.title;
            modalCategory.textContent = project.category;
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;

            // Populate features list
            modalFeatures.innerHTML = '';
            project.features.forEach(feature => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="ri-checkbox-circle-line"></i> ${feature}`;
                modalFeatures.appendChild(li);
            });

            // Populate links
            modalLinks.innerHTML = '';
            project.links.forEach(link => {
                const a = document.createElement('a');
                a.href = link.url;
                a.target = "_blank";
                a.className = "project-link";
                a.innerHTML = `<i class="${link.icon}"></i> ${link.text}`;
                modalLinks.appendChild(a);
            });

            portfolioModalBackdrop.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal on close button click
    modalCloseBtn.addEventListener('click', () => {
        portfolioModalBackdrop.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close modal on backdrop click
    portfolioModalBackdrop.addEventListener('click', e => {
        if (e.target === portfolioModalBackdrop) {
            portfolioModalBackdrop.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal on Escape key press
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && portfolioModalBackdrop.classList.contains('active')) {
            portfolioModalBackdrop.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links and sections
    const navLinks = document.querySelectorAll('.bottom-nav .menu a');
    const sections = document.querySelectorAll('.samss-section');
    const menuShowBtn = document.querySelector('.menu-show-btn');
    const bottomNav = document.querySelector('.bottom-nav');

    // Function to remove active class from all links
    function removeActiveClasses() {
        navLinks.forEach(link => link.classList.remove('current'));
    }

    // Function to add active class to current link
    function addActiveClass(targetId) {
        const targetLink = document.querySelector(`.bottom-nav .menu a[href="#${targetId}"]`);
        if (targetLink) {
            removeActiveClasses();
            targetLink.classList.add('current');
        }
    }

    // Smooth scroll and active state on click
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update active state
                addActiveClass(targetId);
            }
        });
    });

    // Update active state on scroll
    function updateActiveOnScroll() {
        let current = '';
        const scrollPosition = window.scrollY + 100; // Offset for better detection

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        // If we're at the very top, make home active
        if (window.scrollY < 50) {
            current = 'home';
        }

        // Update active state if current section changed
        if (current) {
            addActiveClass(current);
        }
    }

    // Throttle scroll event for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function () {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateActiveOnScroll, 10);
    });

    // Mobile menu toggle functionality
    if (menuShowBtn && bottomNav) {
        menuShowBtn.addEventListener('click', function () {
            bottomNav.classList.toggle('show');
            this.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                bottomNav.classList.remove('show');
                menuShowBtn.classList.remove('active');
            });
        });
    }

    // Initialize - set home as active on page load
    //addActiveClass('home');
    updateActiveOnScroll();
});

/*(function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init({
              publicKey: "VLEbVB_L9J6xQeXbL",
            });
        })();*/

emailjs.init("VLEbVB_L9J6xQeXbL");

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('samss-contact-form');
    const alertBox = form.querySelector('.contact-form-alert');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // validation
        if (!form.full_name.value.trim()) {
            alert('Please enter your name.');
            form.full_name.focus();
            return;
        }
        if (!form.email.value.trim() || !validateEmail(form.email.value)) {
            alert('Please enter a valid email address.');
            form.email.focus();
            return;
        }
        if (!form.subject.value.trim()) {
            alert('Please enter a subject.');
            form.subject.focus();
            return;
        }
        if (!form.message.value.trim()) {
            alert('Please enter your message.');
            form.message.focus();
            return;
        }

        // Disable submit button and send email
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        emailjs.sendForm('service_1fu0nge', 'template_5neutkz', this)
            .then(() => {
                alertBox.classList.remove('error');
                alertBox.classList.add('show', 'success');
                alertBox.querySelector('span').textContent = 'Your message sent successfully!';
                form.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
                setTimeout(() => alertBox.classList.remove('show', 'success'), 5000);
            }, (error) => {
                alertBox.classList.remove('success');
                alertBox.classList.add('show', 'error');
                alertBox.querySelector('span').textContent = 'Oops! Something went wrong. Please try again.';
                console.error('EmailJS error:', error);
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
                setTimeout(() => alertBox.classList.remove('show', 'error'), 5000);
            });
    });

    // Email format validation helper
    function validateEmail(email) {
        // Simple regex for email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
});

// customized cursor 
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const cursorDot = cursor.querySelector('.cursor-dot');
    const cursorCircle = cursor.querySelector('.cursor-circle');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let circleX = mouseX;
    let circleY = mouseY;
    const speed = 0.15;

    window.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Move dot instantly
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    function animate() {
        // Smooth follow for circle
        circleX += (mouseX - circleX) * speed;
        circleY += (mouseY - circleY) * speed;

        cursorCircle.style.left = circleX + 'px';
        cursorCircle.style.top = circleY + 'px';

        requestAnimationFrame(animate);
    }
    animate();

    // Add hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, label');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
});

// website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    // change theme icon click on them
    themeBtn.classList.toggle("active-sun-icon");
    document.body.classList.toggle("light-theme");

    const getCurrentIcon = () => themeBtn.classList.contains("active-sun-icon") ? "sun" : "moon";
    const getCurrentTheme = () => document.body.classList.contains("light-theme") ? "light" : "dark";

    localStorage.setItem("samss-saved-icon", getCurrentIcon());
    localStorage.setItem("samss-saved-theme", getCurrentTheme());

});

// get saved icon and theme on document loaded
const savedIcon = localStorage.getItem("samss-saved-icon");
const savedTheme = localStorage.getItem("samss-saved-theme");

document.addEventListener("DOMContentLoaded", () => {
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("active-sun-icon");
    document.body.classList[savedTheme === "light" ? "add" : "remove"]("light-theme");
});
