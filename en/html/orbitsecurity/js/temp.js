'use strict';


/*
이하 전체 샘플 스크립트입니다.
개발에 용이하게 수정후 적용 부탁드립니다.
*/



let pos;
window.addEventListener('scroll', function(){
    pos = window.scrollY;
	inViewport();
});

window.addEventListener("load", function(){
	let scrollY = window.scrollY;
	fn_scrollY(scrollY);
})

window.addEventListener("resize", function(){
	let width = window.innerWidth;
})

window.addEventListener("scroll", function(){
	let scrollY = window.scrollY;
	fn_scrollY(scrollY);
})


function fn_scrollY(ddd){
	if(ddd > 108) {
		document.querySelector("header").classList.add("active");
	} else {
		document.querySelector("header").classList.remove("active");
	}
}