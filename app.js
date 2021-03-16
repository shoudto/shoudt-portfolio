var i = 0;
var txt = 'simple.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeEffect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}