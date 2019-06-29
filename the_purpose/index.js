

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

//以下6/30に。62html
// function following(str = ""){
//     let shushu = document.getElementById("following").innerHTML; //書き込み済みの文字を要素から取得
//     let writed = shushu.length; //書き込み済みの文字数を取得
//     let write = "";
//     if(writed < str.length){
//         write = str.charAt(writed); //1文字だけ取得する
//     }else{
//         shushu = shushu; //文字の消去("")で際表記
//     }
//     document.getElementById("following").innerHTML = shushu + write; //1文字だけ追加していく
// }
//
// const string = document.getElementById("following").innerHTML; //書き込む文字を要素から取得
// const deldel = 150 //1文字が表示される時間
//
// document.getElementById("following").innerHTML = "";
// window.setInterval(function(){following(string);}, deldel);
//


// 遅らせる
$(function(){
    $(".kakkoii").css({opacity:'0'});
    setTimeout(function(){
        $(".kakkoii").stop().animate({opacity:'1'},1300);
    },1400);
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
