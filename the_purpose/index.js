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
// $(function() {
//   $('.nav open').click(function(){
//     $('#map').fadeIn();
//   });
//   $('.close-map').click(function(){
//     $('#nav-content').fadeOut();
//   });
// });

 $(function(){
   // #で始まるリンクをクリックしたら実行されます
   $('a[href^="#"]').click(function() {
     // スクロールの速度
     var speed = 400; // ミリ秒で記述
     var href= $(this).attr("href");
     var target = $(href == "#" || href == "" ? 'html' : href);
     var position = target.offset().top;
     $('body,html').animate({scrollTop:position}, speed, 'swing');
     return false;
   });
 });
