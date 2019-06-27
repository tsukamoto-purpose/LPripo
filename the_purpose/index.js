$(function() {
    var topBtn = $('#fifi');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    // スクロールしてトップ
    // topBtn.click(function () {
    //     $('body,html').animate({
    //         scrollTop: 0
    //     }, 500);
    //     return false;
    // });
});
// 以下jquery
// $(function() {
//   $('#nav-open').click(function(){
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
