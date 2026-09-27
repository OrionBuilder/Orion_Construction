/* ============================================================
   ORION CONSTRUCTION — V3
   Interactions : header, mobile menu, scroll reveal,
   timeline, mobile CTA, form validation
   ============================================================ */

(function () {
  'use strict';

  // --- HEADER SCROLL ---
  const header = document.querySelector('.header');
  let lastScroll = 0;

  function handleHeaderScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });

  // --- MOBILE MENU ---
  const hamburger = document.querySelector('.header__hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.contains('mobile-menu--open');
      mobileMenu.classList.toggle('mobile-menu--open');
      hamburger.classList.toggle('header__hamburger--active');
      hamburger.setAttribute('aria-expanded', !isOpen);
      mobileMenu.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('mobile-menu--open');
        hamburger.classList.remove('header__hamburger--active');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('mobile-menu--open')) {
        mobileMenu.classList.remove('mobile-menu--open');
        hamburger.classList.remove('header__hamburger--active');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        hamburger.focus();
      }
    });
  }

  // --- SCROLL REVEAL ---
  const revealElements = document.querySelectorAll('.reveal');
  const staggerContainers = document.querySelectorAll('.reveal-stagger');

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  const staggerObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const children = entry.target.children;
        Array.from(children).forEach(function (child, index) {
          setTimeout(function () {
            child.classList.add('is-visible');
          }, index * 120);
        });
        staggerObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  staggerContainers.forEach(function (el) {
    staggerObserver.observe(el);
  });

  // --- TIMELINE PROGRESS ---
  const timeline = document.querySelector('.timeline');
  const timelineProgress = document.querySelector('.timeline__line-progress');
  const timelineSteps = document.querySelectorAll('.timeline__step');

  if (timeline && timelineProgress) {
    const timelineObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -80px 0px'
    });

    timelineSteps.forEach(function (step) {
      timelineObserver.observe(step);
    });

    function updateTimelineProgress() {
      if (!timeline) return;
      const rect = timeline.getBoundingClientRect();
      const timelineHeight = rect.height;
      const scrolled = -rect.top + window.innerHeight * 0.5;
      const progress = Math.max(0, Math.min(1, scrolled / timelineHeight));
      timelineProgress.style.height = (progress * 100) + '%';
    }

    window.addEventListener('scroll', updateTimelineProgress, { passive: true });
  }

  // --- MOBILE CTA BAR ---
  const mobileCta = document.querySelector('.mobile-cta');
  const heroSection = document.querySelector('.hero');
  const footerSection = document.querySelector('.footer');

  if (mobileCta && heroSection) {
    function handleMobileCta() {
      if (window.innerWidth > 768) {
        mobileCta.classList.remove('is-visible');
        return;
      }

      const heroBottom = heroSection.getBoundingClientRect().bottom;
      const footerTop = footerSection ? footerSection.getBoundingClientRect().top : Infinity;
      const windowHeight = window.innerHeight;

      if (heroBottom < 0 && footerTop > windowHeight) {
        mobileCta.classList.add('is-visible');
      } else {
        mobileCta.classList.remove('is-visible');
      }
    }

    window.addEventListener('scroll', handleMobileCta, { passive: true });
    window.addEventListener('resize', handleMobileCta, { passive: true });
  }

  // --- FORM VALIDATION ---
  const form = document.querySelector('.contact-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;

      form.querySelectorAll('[required]').forEach(function (field) {
        const errorEl = field.parentElement.querySelector('.form__error');
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('form__input--error');
          if (errorEl) {
            errorEl.textContent = 'Ce champ est requis';
            errorEl.setAttribute('role', 'alert');
          }
        } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
          isValid = false;
          field.classList.add('form__input--error');
          if (errorEl) {
            errorEl.textContent = 'Adresse email invalide';
            errorEl.setAttribute('role', 'alert');
          }
        } else {
          field.classList.remove('form__input--error');
          if (errorEl) errorEl.textContent = '';
        }
      });

      if (isValid) {
        const submitBtn = form.querySelector('[type="submit"]');
        if (submitBtn) {
          submitBtn.textContent = 'Message envoyé';
          submitBtn.disabled = true;
        }
      }
    });

    form.querySelectorAll('[required]').forEach(function (field) {
      field.addEventListener('input', function () {
        field.classList.remove('form__input--error');
        const errorEl = field.parentElement.querySelector('.form__error');
        if (errorEl) errorEl.textContent = '';
      });
    });
  }

  // --- COUNTER ANIMATION ---
  const counters = document.querySelectorAll('[data-count]');

  if (counters.length) {
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-count'), 10);
          const duration = 2000;
          const start = performance.now();

          function animate(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            entry.target.textContent = Math.floor(target * eased);
            if (progress < 1) requestAnimationFrame(animate);
          }

          requestAnimationFrame(animate);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });
  }

  // --- SERVICE PRE-SELECT (from URL) ---
  const serviceSelect = document.querySelector('#service');
  if (serviceSelect) {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    if (service) {
      const option = serviceSelect.querySelector('option[value="' + service + '"]');
      if (option) option.selected = true;
    }
  }

})();
