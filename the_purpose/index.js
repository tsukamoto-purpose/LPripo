var hhhhh = document.querySelectorAll('.sa');
var animation = function() {
  for(var i = 0; i < hhhhh.length; i++) {
    var trigger = 150;
    if (window.innerHeight > hhhhh[i].getBoundingClientRect().top + trigger) {
      hhhhh[i].classList.add('show');
    }
  }
}
window.addEventListener('load', animation);
window.addEventListener('scroll', animation);


// 以下jquery
$(function() {
  $('.map-show').click(function(){
    $('#map').fadeIn();
  });
  $('.close-map').click(function(){
    $('#map').fadeOut();
  });
});
