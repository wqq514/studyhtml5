// jquery 기본 단위 값 : px
// $ : 모두 찾기

var slideWidth = 1000;							// 전역변수
var slideCount = 3;
var slideCurrent = 0;							// 현재0, 이전-1, 다음 +1

$(document).ready(function(){	// $(function(){})
	// 이전버튼
	$(".prev-scene").click(function(){
		prevScene();			// nextScene 함수 호출
	})
	$(".next-scene").click(function(){
		nextScene();
	})
})

function prevScene(){			// prevScene 함수 정의
	// html, css 다 읽어들이고 나서 js 호출
														// 지역변수
		//console.log("slideCurrent : " +slideCurrent);	// 확인용
		var prevSlide = slideCurrent -1;
		if(prevSlide < 0) prevSlide = 2;
		slideCurrent = prevSlide;
		var nextPos = -slideWidth * prevSlide;			// 다음 이동 위치
		//console.log("nextPos : " +nextPos);			// 확인용
		$(".img").css("margin-left",nextPos);			// -기호는 ""로 묶어줌. -=1000px
}

function nextScene(){
		var nextSlide = slideCurrent +1;
		if(nextSlide >= 3) nextSlide = 0;
		slideCurrent = nextSlide;
		var nextPos = -slideWidth * nextSlide;	
		$(".img").css("margin-left",nextPos);		
}