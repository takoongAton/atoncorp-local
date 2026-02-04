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



/* ------------------- */
/* 화면높이값 */
const viewportHeight = window.innerHeight;
// const body = document.querySelector("body") /* height:100%; 일 경우에만 사용가능 */
// console.log(document.querySelector("div.wrap"))


const items = document.querySelectorAll("div.ani");

function inViewport(){
	console.log("asdf")
	if(items.length) {
		items.forEach(function(item, index, array){
			/* 아이템이 화면 안에 있을때만, 화면 벗어나면 복구 */
			if(item.offsetTop < pos + viewportHeight - (item.clientHeight / 5) && pos < item.offsetTop + (item.clientHeight * 1.2)) {
				item.classList.add("active");
			} else {
				// item.classList.remove("active");
			}
		})
	}
	else {
		return false;
	}
}



// 1. 대상 선정
// 대상 node 선택
const target = document.querySelector('.wrap');

// 2. 옵저버 인스턴스 생성
// 감시자 인스턴스 만들기
const observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		console.log(mutation.type);
		if(mutation.type == 'attributes') {
			
		} else if (mutation.type == 'childList'){
			
			inViewport();
		}
	});
});

// 3. 옵션 설정
// 감시자의 설정:
const config = {
	attributes:true, 
	childList:true, 
	characterData:true, 
	subtree:true
};

// 4. 실행
// 감시자 옵션 포함, 대상 노드에 전달
observer.observe(target, config);

// 나중에, 감시를 중지 가능
// observer.disconnect();


/* footer select */
$(".select_wrap div.triger button").on("click", function(){
	$(this).parent("div.triger").toggleClass("active");
})
$(".select_wrap ul li a, .select_dim").on("click", function(){
	$(".triger").removeClass("active")
})