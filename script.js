document.addEventListener('DOMContentLoaded', () => {

    const heroBg = document.querySelector('.hero-bg');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');

    // === 1. LÓGICA DE DETECÇÃO E TROCA DE TEMA ===
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // === 2. SCROLL WATCHER (PARALLAX + SCROLLED HEADER) ===
    window.addEventListener('scroll', () => {
        let scrollValue = window.scrollY;
        
        if (scrollValue <= window.innerHeight) {
            heroBg.style.top = `${scrollValue * 0.4}px`;
        }
        
        const header = document.querySelector('header');
        if (scrollValue > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // === 3. SISTEMA DE ACESSIBILIDADE DE FONTE ===
    let currentFontSize = 100;
    const fontMin = 70;
    const fontMax = 140;
    const fontStep = 10;

    const btnIncrease = document.getElementById('btn-increase');
    const btnDecrease = document.getElementById('btn-decrease');

    btnIncrease.addEventListener('click', () => {
        if (currentFontSize < fontMax) {
            currentFontSize += fontStep;
            document.documentElement.style.fontSize = `${currentFontSize}%`;
        }
    });

    btnDecrease.addEventListener('click', () => {
        if (currentFontSize > fontMin) {
            currentFontSize -= fontStep;
            document.documentElement.style.fontSize = `${currentFontSize}%`;
        }
    });

    // === 4. MENU HAMBÚRGUER MOBILE ===
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenu.querySelector('i');
            if(icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            }
        });
    });

    // === 5. SCROLL SUAVE PARA LINKS INTERNOS ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // === 6. SEQUENCIAMENTO CASCATA DOS CARDS ===
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 250 * index);
    });

});
