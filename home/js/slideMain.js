var slideNum = 0;// 슬라이드 인덱스를 초기값으로
var slideAuto = null; //null은 값이 없는것 , ''은 공백
// on | off 이런 역할을 하는 값을 스위치 | 플래그(깃발) 변수라고 함.
// 함수 선언 
function play_w(directw) { // 좌우로 슬라이드 되는 함수 선언
    //3개의 조건중에 하나는 무조건 실행되는 구조
    if (directw == "right"){
        slideNum = slideNum +1;
        if(slideNum > 2){ slideNum = 0;}
    }
    else if (directw == "left") {
        slideNum = slideNum -1;
        if(slideNum < 0) {slideNum = 2;}
    }		
    // else {
    // 	slideNum = directw; //string으로 형태 변환
    //li 태그에서 클래스 seq인 것3개를 each함수로 반복(3번)
$(".rollingbtn").find('li.seq a').each(function(){
$('.rollingbtn li.seq a img').attr('src',$('.rollingbtn li.seq a img').attr('src').replace('_on.png','_off.png'));
});
// 현재 선택된 슬라이드 이미지만 on.png로 바꿈
//Css 는 계층형이라 a img 처럼 앞에 한칸 띄워야 계층 인식
$('li.butt' + slideNum+' a img').attr('src',$('li.butt'+ slideNum + ' a img').attr('src').replace('_off.png', '_on.png'));
//slideNum 조건
if(slideNum == 0){
    //슬라이드 인덱스가 0번일 때 li태그를 1초간 서서히 사라지게 한다. 투명도를 서서히 0으로 처리
    $('.viewImgList li.imglist1').animate({'opacity':0}, 1000);
    $('.viewImgList li.imglist2').animate({'opacity':0}, 1000);
    $('.viewImgList li.imglist0').animate({'opacity':1}, 1000);
}
else if(slideNum == 1){
    $('.viewImgList li.imglist0').animate({'opacity':0}, 1000);
    $('.viewImgList li.imglist2').animate({'opacity':0}, 1000);
    $('.viewImgList li.imglist1').animate({'opacity':1}, 1000);
}
else if(slideNum == 2){
    $('.viewImgList li.imglist0').animate({'opacity':0}, 1000);
    $('.viewImgList li.imglist1').animate({'opacity':0}, 1000);
    $('.viewImgList li.imglist2').animate({'opacity':1}, 1000);
}
// 플래그 true일 때 자동 슬라이드, false일때 슬라이드 멈춤
if(slideAuto) {
    clearTimeout(slideAuto);//play W 라는 함수를 실행 중지함
    slideAuto = setTimeout("play_w('right')" ,3000);} //3초(3000ms)단위로 play_w라는 함수를 실행해라 
}//위에서 함수 | 변수 사용slideAuto = setTimeout('play_w("right")' ,3000); //3초 후에 play_w라는 함수 실행
