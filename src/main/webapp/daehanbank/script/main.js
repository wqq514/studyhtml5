//script : 묘사하다, 서술하다, 설명하다 (=손글씨)
//javascript : HTML, CSS를 조작/제어하는 언어 [client-side + server-side]
//tomcat vs nodeServer(=Express)

//(무언가를) 클릭하면 (나타나있는 모달) 팝업을 보여준다(=숨긴다)
//(무언가를) 클릭하면 (숨겨져있던 모달) 팝업을 보여준다(=노출한다)
//자바스크립트 변수 선언 : const(=상수), let/var(변수)

const news = document.querySelector("#opener");	// js + id Selector > class Selector
const modal = document.querySelector("#layer-popup");
const closeBtn = document.querySelector(".btn-close");
const body = document.querySelector("body");

const burger = document.querySelector(".burger");
const mobileNav = document.querySelector("#mobileNav");

burger.addEventListener("click",function(){
	mobileNav.classList.add("show");			//show 클래스 추가
	body.style.overflowY = "hidden";			//스크롤금지
})
const mCloseBtn = document.querySelector("#closer")
mCloseBtn.addEventListener("click",function(){
	mobileNav.classList.remove("show");			//show 클래스 추가
	body.style.overflowY = "auto";		//스크롤 가능하게 하는 속성값
})	


news.addEventListener("click", function(){
	//이벤트에 따라 처리될 업무1
	//이벤트에 따라 처리될 업무2
	//console.log("show modal");			//console 탭에 출력할 내용
	modal.classList.add("show");		//modal에 show라는 클래스 추가
})

closeBtn.addEventListener("click", function(){
	//console.log("close modal");
	modal.classList.remove("show");
})


let isMobile = false;					//현 상태가 모바일 모드 아니면 false

/* window.addEventListener("resize",function(){
	if(this.matchMedia("max-width: 480px").matches){
		isMobile = true;
		console.log(isMobile ? "Mobile " : "Not Mobile");
	}
}) */