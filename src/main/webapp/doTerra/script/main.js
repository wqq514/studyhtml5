const videoList = document.querySelector(".video-list")
const firstItem = videoList.querySelector("li");				//li는 3개지만 1개(첫번째)만 선택됨

const youtube = document.querySelector("#modal")


firstItem.addEventListener("click", function(e){
	e.preventDefault();											//클릭시 페이지 상단으로 스크롤 되는것 막기
	youtube.style.display = "block";
})


const hide = document.querySelector("#hide");

hide.addEventListener("click", function(){
	youtube.style.display = "none";
	//youtube.sound.mute();		
})


