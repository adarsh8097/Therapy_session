document.addEventListener('DOMContentLoaded', function () {
    const benefitsSwiper = new Swiper('.benefits-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true, // Optional: Loop back to Benefit 1
        autoplay: {
            delay: 5000, // Optional: Auto-slide every 5 seconds
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Some additional code for handling the benefits section can be added here if needed
    const testimonialsSwiper = new Swiper('.testimonials-swiper', {
        slidesPerView: 1, // Start with 1 on mobile
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        breakpoints: {
            768: { slidesPerView: 3, spaceBetween: 30 } // Show 3 on Desktop
        },
        navigation: {
            nextEl: '.custom-nav-next',
            prevEl: '.custom-nav-prev',
        },
    });

    // Team section - Add click event to team members for more info
    const teamSwiper = new Swiper('.team-swiper', {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true, // Isse slider khatam hone par wapas shuru ho jayega
        navigation: {
            nextEl: '.team-nav-next_demo', // Ab ye aapke HTML se match karega
            prevEl: '.team-nav-prev_demo',
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
});

// FaQ Section - Toggle answer visibility on question click

    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const currentItem = button.parentElement;
            
            // Optional: Close other open items (Accordion effect)
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('active');
                }
            });

            // Toggle current item
            currentItem.classList.toggle('active');
        });
    });

    // Mobile Navigation Toggle
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,      // Agla slide thoda sa dikhega user ko
    centeredSlides: true,    // Current slide center mein rahegi
    spaceBetween: 20,        // Slides ke beech ka gap
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Mobile par smooth swipe ke liye
    grabCursor: true,
  });

//   Swrvice siper;

    let swiperInstance;

    function handleServicesSlider() {
        const isMobile = window.innerWidth <= 768;

        if (isMobile && !swiperInstance) {
            // Mobile par slider start karein
            swiperInstance = new Swiper(".services-swiper", {
                slidesPerView: 1.2, // Agla card thoda dikhega
                centeredSlides: true,
                spaceBetween: 20,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        } else if (!isMobile && swiperInstance) {
            // Desktop par slider band kar dein
            swiperInstance.destroy(true, true);
            swiperInstance = undefined;
        }
    }

    // Load aur Screen resize par function chalayein
    window.addEventListener("load", handleServicesSlider);
    window.addEventListener("resize", handleServicesSlider);


// Mpobile bloger section ke liye slider

    let blogSwiper;

    function initBlogSlider() {
        const isMobile = window.innerWidth <= 768;

        if (isMobile && !blogSwiper) {
            blogSwiper = new Swiper(".blogs-swiper", {
                slidesPerView: 1.15, // Side wala card thoda dikhega cues ke liye
                centeredSlides: true,
                spaceBetween: 20,
                pagination: {
                    el: ".blog-pagination",
                    clickable: true,
                },
            });
        } else if (!isMobile && blogSwiper) {
            blogSwiper.destroy(true, true);
            blogSwiper = undefined;
        }
    }

    window.addEventListener("load", initBlogSlider);
    window.addEventListener("resize", initBlogSlider);
