window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var navbar = document.getElementById('navbar');
  var logo = document.getElementById('logo');
  var topbar = document.getElementById('topbar');

  if (scrollTop >= 20) {
    navbar.style.padding = '20px';
    logo.style.width = '60%';
    topbar.style.display = 'none';
  } else {
    navbar.style.padding = '30px';
    logo.style.width = '80%';
    topbar.style.display = 'block'; // Adjust to show the top bar when scrolling up
  }
}

// Add CSS transition to the 'navbar' and 'logo' elements
document.getElementById('navbar').style.transition = 'padding 0.5s ease';
document.getElementById('logo').style.transition = 'width 0.5s ease';

document.querySelectorAll('.navbar-nav a').forEach((navLink) => {
  navLink.addEventListener('click', () => {
    document.querySelector('.navbar-toggler').click(); // Simulate a click on the toggle button
  });
});

// Close the navbar when the user scrolls
window.addEventListener('scroll', () => {
  if (document.body.classList.contains('show')) {
    document.querySelector('.navbar-toggler').click(); // Simulate a click on the toggle button
  }
});
