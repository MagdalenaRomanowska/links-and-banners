function toggleMenu(visible) {
  document.querySelector('.container-fluid-left-menu').classList.toggle('d-none', visible);
}
  
document.querySelector('.empty .fa-bars').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

document.querySelector('.left-nav .fa-bars').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});