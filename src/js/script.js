function toggleMenu(visible) {
  document.querySelector('.container-fluid-left-menu').classList.toggle('d-none', visible);
  document.querySelector('.container-fluid-right-menu').classList.toggle('col-lg-12');
}
  
document.querySelector('.empty .fa-bars').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

function removeMenu() {
  document.querySelector('.container-fluid-left-menu').classList.add('d-none');
  document.querySelector('.empty .fa-bars').classList.remove('d-lg-none');
  document.querySelector('.container-fluid-right-menu').classList.toggle('col-lg-12');
}

document.querySelector('.left-nav .fa-bars').addEventListener('click', function(e) {
  e.preventDefault();
  removeMenu();
});

function addMenu() {
  document.querySelector('.container-fluid-left-menu').classList.remove('d-none');
}

function myFunction(findMediaSize) {
  if (findMediaSize.matches) { // If media query matches
    removeMenu();
  } else {
    addMenu();
  }
}

const findMediaSize = window.matchMedia('(max-width: 700px)');
myFunction(findMediaSize); 
findMediaSize.addListener(myFunction); 