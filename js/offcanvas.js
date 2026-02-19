//=============== offcanvas =================//
document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.rs-offcanvas-btn');
  const closeBtn = document.querySelector('.tp-offcanvas-close button');
  const offcanvas = document.querySelector('.tp-offcanvas-area');
  const overlay = document.querySelector('.modal_backdrop_2');

  if (!openBtn || !closeBtn || !offcanvas || !overlay) return;

  openBtn.addEventListener('click', () => {
    offcanvas.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', closeOffcanvas);
  overlay.addEventListener('click', closeOffcanvas);

  function closeOffcanvas() {
    offcanvas.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
});