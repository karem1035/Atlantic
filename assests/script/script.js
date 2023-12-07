// Use addEventListener to attach the scroll event handler
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  // Use document.documentElement.scrollTop || document.body.scrollTop for cross-browser compatibility
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  // Get the 'navbar' element
  var navbar = document.getElementById('navbar');
  var logo = document.getElementById('logo');

  // Adjust the padding based on the scroll position
  if (scrollTop >= 20) {
    navbar.style.padding = '20px 0';
    logo.style.width = '60%'; // Change the padding values to your desired values
  } else {
    navbar.style.padding = '30px 0'; // Change the padding values to your desired values
    logo.style.width = '80%';
  }
}

// Add CSS transition to the 'navbar' element
document.getElementById('navbar').style.transition = 'padding 0.5s ease';
document.getElementById('logo').style.transition = 'width 0.5s ease';
