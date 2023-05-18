const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');
const muteButton = document.getElementById('muteButton');
const timeDisplay = document.getElementById('timeDisplay');


window.addEventListener('scroll', function() {
  const videoTop = video.getBoundingClientRect().top;
  const videoBottom = video.getBoundingClientRect().bottom;
  const windowBottom = window.innerHeight;

  if (videoTop < windowBottom && videoBottom > 0) {
    video.play();
  } else {
    video.pause();
  }
});


playButton.addEventListener('click', function() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});


muteButton.addEventListener('click', function() {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
});


video.addEventListener('timeupdate', function() {
  const currentTime = formatTime(video.currentTime);
  const duration = formatTime(video.duration);
  timeDisplay.textContent = `${currentTime} / ${duration}`;
});


function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${padZero(minutes)}:${padZero(seconds)}`;
}


function padZero(num) {
  return (num < 10 ? '0' : '') + num;
}


/*FAG*/
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {

        this.classList.toggle("active");

        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
/*gallery*/
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}