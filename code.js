// subscribe box ad
var subcontainer = document.getElementById("sub-container");
var subcancel = document.getElementById("sub-cancel");
subcancel.addEventListener("click", function () {
  subcontainer.style.display = "none";
});

// slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   // dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}

var vidtrigger = document.getElementById("img-container");
var vidframecontainer = document.getElementById("frame-container");
var framecancel = document.getElementById("frame-cancel");
vidtrigger.addEventListener("click", function () {
  vidframecontainer.style.display = "flex";
});
framecancel.addEventListener("click", function () {
  vidframecontainer.style.display = "none";
});


// 3 line menu
var lineicon = document.getElementById('line-menu-icon');
var sidebar = document.getElementById('sidebar');
var sidebarclose = document.getElementById('sidebar-close');
lineicon.addEventListener('click', function(){
  sidebar.style.display="flex";
});
sidebarclose.addEventListener('click', function(){
  sidebar.style.display="none";
});
