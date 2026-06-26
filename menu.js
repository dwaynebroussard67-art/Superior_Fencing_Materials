// SUPERIOR BUILDING MATERIALS - Mobile Menu & FAQ Toggle
// Plain vanilla JavaScript only

document.addEventListener('DOMContentLoaded', function() {

  // MOBILE MENU TOGGLE
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Dropdown toggle (Services) — open the submenu on click at all widths
  const dropdownWrappers = document.querySelectorAll('.nav-dropdown-wrapper');
  dropdownWrappers.forEach(wrapper => {
    const link = wrapper.querySelector('a');
    if (link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        wrapper.classList.toggle('active');
      });
    }
  });

  // FAQ ACCORDION
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const isActive = this.classList.contains('active');

      // Close all other FAQs
      faqQuestions.forEach(q => {
        q.classList.remove('active');
        q.setAttribute('aria-expanded', 'false');
        if (q.nextElementSibling) {
          q.nextElementSibling.classList.remove('active');
        }
      });

      // Toggle current FAQ
      if (!isActive) {
        this.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
        if (answer) {
          answer.classList.add('active');
        }
      }
    });
  });

  // Set initial aria-expanded on FAQ questions
  faqQuestions.forEach(q => {
    q.setAttribute('aria-expanded', 'false');
  });

});
