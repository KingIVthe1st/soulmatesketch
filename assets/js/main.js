// Soulmate Sketch - Ultimate Cosmic Interactive Experience

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all cosmic effects
    initCosmicBackground();
    initScrollAnimations();
    initInteractiveEffects();
    initTestimonialSlider();
    initZodiacFloating();
    initShootingStars();
    initHeaderScrollEffect();
    initSmoothScrolling();
    initParticleSystem();
});

// Cosmic Background Initialization
function initCosmicBackground() {
    // Create floating hearts
    setInterval(createFloatingHeart, 3000);
    
    // Create cosmic sparkles on mouse move
    document.addEventListener('mousemove', createCosmicSparkles);
    
    // Create particle burst on click
    document.addEventListener('click', createParticleBurst);
}

// Floating Hearts Animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-hearts';
    heart.innerHTML = '💕';
    
    // Random position
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.opacity = Math.random() * 0.7 + 0.3;
    
    document.body.appendChild(heart);
    
    // Remove after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 8000);
}

// Zodiac Symbol Floating
function initZodiacFloating() {
    const zodiacSymbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
    
    // Create zodiac container if it doesn't exist
    if (!document.querySelector('.zodiac-symbols')) {
        const zodiacContainer = document.createElement('div');
        zodiacContainer.className = 'zodiac-symbols';
        document.body.appendChild(zodiacContainer);
    }
    
    setInterval(() => {
        const zodiac = document.createElement('div');
        zodiac.className = 'zodiac-symbol';
        zodiac.innerHTML = zodiacSymbols[Math.floor(Math.random() * zodiacSymbols.length)];
        
        // Random starting position
        zodiac.style.left = Math.random() * 90 + 'vw';
        zodiac.style.animationDuration = (Math.random() * 5 + 10) + 's';
        zodiac.style.animationDelay = Math.random() * 2 + 's';
        
        document.querySelector('.zodiac-symbols').appendChild(zodiac);
        
        // Remove after animation
        setTimeout(() => {
            if (zodiac.parentNode) {
                zodiac.parentNode.removeChild(zodiac);
            }
        }, 17000);
    }, 2000);
}

// Shooting Stars Effect
function initShootingStars() {
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every interval
            createShootingStar();
        }
    }, 8000);
}

function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    
    // Random starting position
    star.style.top = Math.random() * 50 + '%';
    star.style.left = '-10px';
    
    // Random animation duration
    star.style.animationDuration = (Math.random() * 2 + 2) + 's';
    
    document.body.appendChild(star);
    
    // Remove after animation
    setTimeout(() => {
        if (star.parentNode) {
            star.parentNode.removeChild(star);
        }
    }, 5000);
}

// Cosmic Sparkles on Mouse Movement
let lastSparkleTime = 0;
function createCosmicSparkles(e) {
    const now = Date.now();
    if (now - lastSparkleTime < 100) return; // Throttle sparkles
    lastSparkleTime = now;
    
    if (Math.random() < 0.3) { // 30% chance
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 800);
    }
}

// Particle Burst on Click
function createParticleBurst(e) {
    const particles = ['✨', '💫', '⭐', '🌟', '💖', '💕', '🔮'];
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
        
        // Position at click location
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        
        // Random direction and distance
        const angle = (360 / particleCount) * i;
        const distance = Math.random() * 100 + 50;
        const radian = angle * (Math.PI / 180);
        
        particle.style.setProperty('--dx', Math.cos(radian) * distance + 'px');
        particle.style.setProperty('--dy', Math.sin(radian) * distance + 'px');
        
        // Custom animation for each particle
        particle.style.animation = `particle-burst 1s ease-out forwards`;
        particle.style.transform = `translate(var(--dx, 0), var(--dy, 0))`;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach((el) => {
        observer.observe(el);
    });
}

// Header Scroll Effect
function initHeaderScrollEffect() {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = scrollY;
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Testimonial Slider
function initTestimonialSlider() {
    const testimonials = [
        {
            stars: "⭐⭐⭐⭐⭐",
            text: "OMG! This is actually insane how accurate it was. I got my sketch 2 days ago and literally bumped into someone at Starbucks who looks EXACTLY like my sketch. We exchanged numbers and I'm shook. The universe is real! 💕✨",
            author: "- @sarahjones26 ♌, 150K TikTok views"
        },
        {
            stars: "⭐⭐⭐⭐⭐",
            text: "I was so skeptical but OMG... I've been dating my 'soulmate sketch' for 3 months now! We met exactly where the report said we would (coffee shop near work). This is not a coincidence!! 😍",
            author: "- @miakimxo ♓, 2.3M TikTok views"
        },
        {
            stars: "⭐⭐⭐⭐⭐",
            text: "Did the blind box challenge and posted my reaction - 500K views! But seriously, this sketch looks like my boyfriend of 2 years. I did this AFTER we started dating to test it. MIND BLOWN! 🤯",
            author: "- @jenniferlovestarot ♊, 890K TikTok views"
        },
        {
            stars: "⭐⭐⭐⭐⭐",
            text: "The personality report was SO accurate it's scary. It literally described my ideal person down to their coffee order. I'm manifesting them into my life right now! ✨💕",
            author: "- @cosmicbabe99 ♎, 67K TikTok views"
        }
    ];
    
    let currentTestimonial = 0;
    const testimonialElement = document.querySelector('.testimonial');
    
    function updateTestimonial() {
        const testimonial = testimonials[currentTestimonial];
        
        testimonialElement.style.opacity = '0';
        
        setTimeout(() => {
            testimonialElement.querySelector('.stars-rating').textContent = testimonial.stars;
            testimonialElement.querySelector('p').textContent = testimonial.text;
            testimonialElement.querySelector('.testimonial-author').textContent = testimonial.author;
            testimonialElement.style.opacity = '1';
        }, 300);
        
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }
    
    // Auto-rotate testimonials
    setInterval(updateTestimonial, 4000);
}

// Interactive Effects
function initInteractiveEffects() {
    // Enhanced button hover effects
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Ripple effect on click
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Feature card tilt effect
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateX(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg)';
        });
    });
    
    // Pricing card hover effect
    document.querySelectorAll('.pricing-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
}

// Particle System for Enhanced Interactions
function initParticleSystem() {
    // Create particle system for cosmic orb
    const cosmicOrb = document.querySelector('.cosmic-orb');
    if (cosmicOrb) {
        cosmicOrb.addEventListener('mouseenter', function() {
            createOrbParticles(this);
        });
    }
}

function createOrbParticles(orb) {
    const rect = orb.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'sparkle';
        
        const angle = (360 / 12) * i;
        const radius = 150;
        const radian = angle * (Math.PI / 180);
        
        particle.style.left = (centerX + Math.cos(radian) * radius) + 'px';
        particle.style.top = (centerY + Math.sin(radian) * radius) + 'px';
        particle.style.animationDelay = (i * 0.1) + 's';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 800);
    }
}

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .cta-button {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Performance optimization: Clean up old elements
setInterval(() => {
    // Clean up old floating elements
    const floatingHearts = document.querySelectorAll('.floating-hearts');
    floatingHearts.forEach(heart => {
        const rect = heart.getBoundingClientRect();
        if (rect.top < -100) {
            heart.remove();
        }
    });
    
    const zodiacSymbols = document.querySelectorAll('.zodiac-symbol');
    zodiacSymbols.forEach(symbol => {
        const rect = symbol.getBoundingClientRect();
        if (rect.top < -100) {
            symbol.remove();
        }
    });
}, 10000);

// Add window load event for performance
window.addEventListener('load', function() {
    // Preload critical animations
    document.body.classList.add('loaded');
    
    // Initialize any heavy effects after load
    setTimeout(() => {
        initAdvancedEffects();
    }, 1000);
});

function initAdvancedEffects() {
    // Add advanced particle effects or heavy animations here
    // Only after the page is fully loaded
    
    // Example: Enhanced aurora effect
    const aurora = document.querySelector('.aurora');
    if (aurora) {
        aurora.style.opacity = '1';
    }
}

// Error handling
window.addEventListener('error', function(e) {
    console.log('Cosmic interference detected, but the magic continues...', e.message);
});

// Mobile optimizations
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Reduce particle effects on mobile for performance
    document.body.classList.add('mobile-device');
    
    // Reduce animation frequency on mobile
    const style = document.createElement('style');
    style.textContent = `
        .mobile-device .floating-hearts {
            animation-duration: 12s !important;
        }
        .mobile-device .zodiac-symbol {
            animation-duration: 20s !important;
        }
        .mobile-device .shooting-star {
            animation-duration: 4s !important;
        }
    `;
    document.head.appendChild(style);
}