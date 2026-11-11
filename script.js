// ========================================================
// HÉLIO MEDEIROS — PORTFÓLIO
// Interatividade, Cabeçalho Fixo, Menu Mobile & Animações
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.header-nav .nav-item');
  const drawerNavItems = document.querySelectorAll('.drawer-nav-item');

  // Menu Mobile Elements
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileBackdrop = document.querySelector('.mobile-nav-backdrop');
  const drawerCloseBtn = document.querySelector('.drawer-close-btn');

  // 1. Alternar Menu Mobile
  function openMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.add('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
    }
    if (mobileBackdrop) mobileBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.remove('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
    if (mobileBackdrop) mobileBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer && mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeMobileMenu);
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Fechar ao clicar em qualquer link do drawer
  drawerNavItems.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Fechar ao pressionar Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
  });

  // 2. Cabeçalho fixo com fundo translúcido/blur ao rolar
  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // 3. Atualizar botão ativo da navegação de acordo com o scroll
  function highlightNavigation() {
    const scrollPosition = window.scrollY + 180;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Atualiza navegação desktop
        navItems.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `#${sectionId}` || (sectionId === 'sobre' && href === '#hero')) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        // Atualiza navegação mobile (drawer)
        drawerNavItems.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', () => {
    handleHeaderScroll();
    highlightNavigation();
  }, { passive: true });

  // Executa uma vez no carregamento
  handleHeaderScroll();
  highlightNavigation();

  // 4. Scroll Reveal: Animações suaves ao descer a página
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback para navegadores sem IntersectionObserver
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  // 5. Manipulação de envio do formulário de contato
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('.submit-button');
      const originalContent = btn.innerHTML;

      // Feedback visual elegante de sucesso
      btn.innerHTML = '<span>Mensagem enviada com sucesso! ✓</span>';
      btn.style.backgroundColor = '#2e7d32';

      setTimeout(() => {
        form.reset();
        btn.innerHTML = originalContent;
        btn.style.backgroundColor = '';
      }, 4000);
    });
  }
});
