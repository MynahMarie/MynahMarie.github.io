var i = 0;
var txt = 'My name is Mynah and I\'m a Fullstack Web Developper.';
var speed = 50;

function typeWriter() {
  console.log('inside typeWriter');
  if (i < txt.length) {
    document.getElementById("typeWriter").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    i = 0;
  }
}

setTimeout(typeWriter, 1000);

document.getElementById('splashIntro').addEventListener('click', function() {
  document.getElementById('typeWriter').textContent = "";
  setTimeout(typeWriter, 1000);
});
