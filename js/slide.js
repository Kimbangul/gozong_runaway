// javascript Document
jQuery(document).ready(function(){

  var background_slide = {
    $backgroud_slider :  $('section#contents'),

    $background_img : [
      "url('img/main/slide/background_1.jpg')",
      "url('img/main/slide/background_2.jpg')",
      "url('img/main/slide/background_3.jpg')",
      "url('img/main/slide/background_4.png')",
      "url('img/main/slide/background_5.jpg')"
    ]
  }


  var imgs;
  var img_count;
  var img_position = 1;
  var img_width;
  var img_left = $('div.imgslide > ul').css("left");
  var slide_speed = 700;
  var slide_transparency = 800;
  var slide_reset_speed = 1000;
  var slide_reset_transparency = 2000;



  imgs = $("div.imgslide > ul");
  img_count = imgs.children().length;
  img_width = imgs.find('img').width();



  $( window ).resize($.debounce(300, function(){slide_position_fix();}));
  // 창 크기 변경 감지

  // resize(function() {
  //   slide_position_fix();
// });
// 이전 코드

function slide_position_fix(){
  img_width = imgs.find('img').width();
  imgs.css({
    left: img_width*(img_position-1)*(-1)
  });
  // console.log('fixed');
  // 작동 테스트용 코드
}


  // imgslide ul의 자식 엘리먼트, 즉 li(이미지)의 갯수

  imgs.children('li').eq(0).siblings().css({opacity: '0'});
  // 초기화

// 함수 실행
function delay(){
  setTimeout(slide, 5000);
}

function slide(){
  if($('div.imgslide:hover').length == 0){
    next();
    slide_position_fix();
  }
  else{
    delay();
    // console.log('hover');
    return false;
  }
  delay();
}

delay();

$('.imgslide > .btn.left').click($.debounce(200, function(){
  back();
}));

$('.imgslide > .btn.right').click($.debounce(200, function(){
  next();
}));


  function back(){

    if(1<img_position){
      imgs.animate({
        left: (img_width*(-1)*(img_position-1))+img_width

      },slide_speed);
      imgs.children('li').eq(img_position-1).animate({opacity: '0'}, slide_transparency);
      imgs.children('li').eq(img_position-2).animate({opacity: '1'}, slide_transparency);
      img_position--;
      // 이미지의 width 값이 동일하기 때문에 왼쪽으로 1000px만큼 이동해서 슬라이드 되는 것처럼 보이게 함.

    }
    else{
      // back 버튼을 눌렀을 때의 디스플레이 이미지가 맨 처음 이미지일 때
      imgs.animate({
        left: img_width*(img_count-1)*(-1)
      }, slide_reset_speed);
      imgs.children('li').eq(img_position-1).animate({opacity: '0'}, slide_transparency);
      imgs.children('li:last-child').animate({opacity: '1'}, slide_reset_transparency);
      img_position = 5;
    }
    background_slide.$backgroud_slider.css('background-image', background_slide.$background_img[img_position-1]);

  }

  function next(){

    if(img_count>img_position){
      imgs.children('li').eq(img_position-1).animate({opacity: '0'}, slide_transparency);
      imgs.children('li').eq(img_position).animate({opacity: '1'}, slide_transparency);

      imgs.animate({
        left: img_width*(img_position*(-1))
      }, slide_speed);
      img_position++;

    }
    else{
      imgs.animate({
        left:'0px'
      }, slide_reset_speed);
      imgs.children('li').eq(img_position-1).animate({opacity: '0'}, slide_transparency);
      imgs.children('li:first-child').animate({opacity: '1'}, slide_reset_transparency);
      img_position = 1;
    }

    background_slide.$backgroud_slider.css('background-image', background_slide.$background_img[img_position-1]);
  }




});
