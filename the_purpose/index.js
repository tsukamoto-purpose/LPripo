var hhhhh = document.querySelectorAll('.sa');
var animation = function() {
  for(var i = 0; i < hhhhh.length; i++) {
    var trigger = 100;
    if (window.innerHeight > hhhhh[i].getBoundingClientRect().top + trigger) {
      hhhhh[i].classList.add('show');
    }
  }
}
window.addEventListener('load', animation);
window.addEventListener('scroll', animation);



var line = document.querySelectorAll('.rara');
var punch = function() {
  for(var i = 0; i < line.length; i++) {
    var samsam = 150;
    if (window.innerHeight > line[i].getBoundingClientRect().top + samsam) {
      line[i].classList.add('taken');
    }
  }
}
window.addEventListener('load', punch);
window.addEventListener('scroll', punch);




//メニューバーを指定場所から表記
$(function() {
    var topBtn = $('#fifi');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});
// タイプライター
function typing(str = ""){
    let buf = document.getElementById("typing").innerHTML; //書き込み済みの文字を要素から取得
    let writed = buf.length; //書き込み済みの文字数を取得
    let write = "";
    if(writed < str.length){
        write = str.charAt(writed); //1文字だけ取得する
    }else{
        buf = buf; //文字の消去("")で際表記
    }
    document.getElementById("typing").innerHTML = buf + write; //1文字だけ追加していく
}

const str = document.getElementById("typing").innerHTML; //書き込む文字を要素から取得
const delay = 150 //1文字が表示される時間

document.getElementById("typing").innerHTML = "";
window.setInterval(function(){typing(str);}, delay);



// 遅らせる
$(function(){
    $(".delay").css({opacity:'0'});
    setTimeout(function(){
        $(".delay").stop().animate({opacity:'1'},2000);
    },2100);
});







// 以下jquery
$(function () {
    setTimeout('rect()'); //アニメーションを実行
});

function rect() {
    $('#rect').animate({
        marginTop: '-=10px'
    }, 800).animate({
        marginTop: '+=10px'
    }, 800);
    setTimeout('rect()', 1600); //アニメーションを繰り返す間隔
}


 $(function(){
   // #で始まるリンクをクリックしたら実行される
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
