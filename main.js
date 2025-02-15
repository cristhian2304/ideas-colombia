document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.site-header');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  let lastScroll = 0;

  // Manejo del scroll para ocultar/mostrar el header
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      header.classList.remove('header-hidden');
      return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('header-hidden')) {
      // Scroll hacia abajo
      header.classList.add('header-hidden');
    } else if (currentScroll < lastScroll && header.classList.contains('header-hidden')) {
      // Scroll hacia arriba
      header.classList.remove('header-hidden');
    }
    
    lastScroll = currentScroll;
  });

  // Toggle del menú móvil
  mobileMenuToggle.addEventListener('click', () => {
    document.body.classList.toggle('mobile-menu-active');
  });

  // Cerrar menú móvil al hacer click en un enlace
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('mobile-menu-active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Filtrado de proyectos
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      
      // Actualizar botones activos
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filtrar proyectos
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
          item.style.animation = 'portfolioFadeIn 0.6s ease-out';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Modal de proyecto
  const modal = document.getElementById('projectModal');
  const viewButtons = document.querySelectorAll('.btn-view-project');
  const closeButton = document.querySelector('.modal-close');

  viewButtons.forEach(button => {
    button.addEventListener('click', () => {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Animación de logos al scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });
});
