var i = 0;
var txt = 'My name is Mynah and I\'m a Fullstack Web Developper.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeWriter").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    i = 0;
  }
}

setTimeout(typeWriter, 500);

document.getElementById('splashIntro').addEventListener('click', function() {
  i = 0;
  document.getElementById('typeWriter').textContent = "";
  setTimeout(typeWriter, 500);
});


function noscroll() {
  window.scrollTo( 0, 0 );
}

// add listener to disable scroll
window.addEventListener('scroll', noscroll);
