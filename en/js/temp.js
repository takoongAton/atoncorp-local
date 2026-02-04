'use strict';

/* ********************

이하 전체 테스트 스크립트입니다.
개발에 용이하도록 새로 작성해서 적용 부탁드립니다.

******************** */

let pos;

window.addEventListener('scroll', function(){
    pos = window.scrollY;
	// goTop.check(pos); //  위로가기
    header.header_set(pos); // 그림자 넣기
	console.log(pos)
});


/* 헤더 그림자 넣기 */
var header;
header = {
	item : document.querySelector('.header_wrap'),
	header_set : function(pos){
		if(header.item == null) {
			return;
		}
		// if(pos > header.item.offsetHeight) {
		if(pos > 1) {
			header.item.classList.add('active')
		} else {
			header.item.classList.remove('active')
		}
		// (pos > header.item.offsetHeight * 1.5) ? header.item.classList.add('active') : header.item.classList.remove('active');
	}
}




// 사이드 메뉴 닫기
const close_aside = document.querySelector(".gnb_wrap .nav_wrap .btn_close button");
if(close_aside != null) {
	close_aside.addEventListener("click", function(){
		document.querySelector(".gnb_wrap").classList.remove("active")
		document.querySelector("body").style.overflow = ""
	})
}

// 사이드 메뉴 열기
const open_aside = document.querySelector("a.open_aside");
if(open_aside != null) {
	open_aside.addEventListener("click", function(){
		document.querySelector(".gnb_wrap").classList.add("active") // 사이드 메뉴 보이기
		document.querySelector("body").style.overflow = "hidden" // 필요 외 영역 스크롤 막기 위함
		document.querySelector(".nav_section").scrollTop = 1; // 위로가기 스크롤시 멈춤현상 제어
	})
}



/* 이하 테스트용 스크립트 입니다. 삭제후 재작업 부탁드립니다. */
/*$(".menu a.depth2").on("click", function(){
	var $this = $(this);
	if($this.hasClass("active")){
	} else {
		$(".menu a").each(function(){
			$(this).removeClass("active");
			$(this).next().stop().slideUp(200);
		})
		$this.next().stop().slideDown(200);
		$this.toggleClass("active");
	}
})*/


/*
function open_popup(target){
	var $this = "#" + target;
	$($this).css({
		"display" : "block"
	})
}

function close_popup(target){
	var $this = "#" + target;
	$($this).css({
		"display" : "none"
	})
}
*/


// $("dt").on("click", function(){
// 	$(this).parent("dl").find("dd").stop().slideToggle(100)
// })

$("button.aside_triger").on("click", function(){
	$(".wrap").toggleClass("aside_open");
})

$(".btn_group button").on("click", function(){
	$(this).addClass("checked");
	$(this).siblings().removeClass("checked")
})



/* footer select */
$(".select_wrap div.triger button").on("click", function(){
	$(this).parent("div.triger").toggleClass("active");
})
$(".select_wrap ul li a, .select_dim").on("click", function(){
	$(".triger").removeClass("active")
})


var footerSelect = {
	triger : document.querySelector('.select_wrap div.triger button'),
	set : function(){

	},
	action : function(){
		console.log("footerSelect")
	}
}

footerSelect.triger.addEventListener("click", function(){
	footerSelect.action();
})



// 툴팁 도움말
function layer_tooltip(ele) {
	$(".layer.help").hide();
	$(".layer.help").removeClass("active");
	let thisOffset  = ele.offset().top;
	let $targetHref = ele.attr("href");
	let targetId = $targetHref;
	let viewportHeight = $(window).innerHeight();
	if(viewportHeight / 2 < ((pos - thisOffset) * -1)) {
		/* 버튼의 높이값이 **보다 크면 버튼 위에 */
		let targetHeight = ( $(targetId).outerHeight() + (ele.outerHeight() / 3) )* -1; // 도움말 팝업의 높이값
		$(targetId).css({
			top : thisOffset,
			marginTop : targetHeight
		});
	} else {
		/* 버튼의 높이값이 **보다 작으면 버튼 아래 */
		$(targetId).css({
			top : thisOffset,
			marginTop : ele.outerHeight() + (ele.outerHeight() / 3)
		});
	}
	$(targetId).show();
	$(targetId).addClass("active");
	return false;
}





window.addEventListener('scroll', function(){
	console.log("scroll")
	pos = window.scrollY;
	toTop.set(pos); // 위로가기 버튼 보이기 
	console.log("scroll to top")
	console.log("document.scrollingElement.scrollTop : " + document.scrollingElement.scrollTop)
});

window.addEventListener('load', function(){
	console.log("load : " + "window.addEventListener('load', function(){ ... }");
});

window.addEventListener('load', () => {
	console.log("load : " + "window.addEventListener('load',() => { ... }");
})

window.addEventListener('resize', function(){
	console.log("resize : " + "window.addEventListener('resize', function(){ ... }");
	layout.resize();
});



/*
$(document).ready(function(){
	$window.on('scroll', function(){

	});
	$window.on('load', function(){

	});
	$window.on('resize', function(){

	});
});
*/



/* 기본 높이값 적용 여부 */
let layout;
layout = {
	html : document.querySelector("html"),
	body : document.querySelector("body"),
	wrap : document.querySelector(".wrap"),
	header : document.querySelector("header"),
	action : function(pos){
		if(layout.wrap.offsetHeight < window.innerHeight) {
			layout.html.classList.add("flexCol");
		} else {
			layout.html.classList.remove("flexCol");
		}
	},
	resize : function(){
		/*
		let headerWidth = layout.header.width;
		let bodyWidth = layout.body.width;
		if(headerWidth < 1024) {
			let yy = bodyWidth;
			console.log("1024보다 큼");
		}
		*/
	}
}
layout.action();


/* 위로가기 버튼 */
let toTop;
toTop = {
	item : document.querySelector(".toTop"),
	set : function(pos){
		if(pos >= 100){
			toggleClass.addClassActive(toTop.item)
		}else{
			toggleClass.removeClassActive(toTop.item)
		}
	},
	action : function(pos){
		$("html").animate({scrollTop: 0}, 300);
	}
}
toTop.item.addEventListener("click", function(){
	scrollToTop(300);
	// toTop.action();
})


/* toggle class active */
let toggleClass;
toggleClass = {
	addClassActive : function(ele){
		ele.classList.add("active");
	},
	removeClassActive : function(ele){
		ele.classList.remove("active");
	}
}


function scrollToTop (duration) {
    // cancel if already on top
    if (document.scrollingElement.scrollTop === 0) return;

    const cosParameter = document.scrollingElement.scrollTop / 2;
    let scrollCount = 0, oldTimestamp = null;

    function step (newTimestamp) {
        if (oldTimestamp !== null) {
            // if duration is 0 scrollCount will be Infinity
            scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
            if (scrollCount >= Math.PI) return document.scrollingElement.scrollTop = 0;
            document.scrollingElement.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}


/* aside open */
const triger_aside = document.querySelector(".open_aside");
if(triger_aside != null ) {
	
}


let megamenu = document.querySelector(".megamenu");
megamenu.addEventListener("mouseover", function(){
	document.querySelector(".header_wrap").classList.add("fullMenuOver");
	document.querySelector(".header_wrap").style.backgroundColor = "#fff";
	document.querySelector(".header_wrap .ask").classList.add("active");
})
megamenu.addEventListener("mouseleave", function(){
	document.querySelector(".header_wrap").classList.remove("fullMenuOver");
	document.querySelector(".header_wrap").style.backgroundColor = ""
	document.querySelector(".header_wrap .ask").classList.remove("active");
})

/* pc gnb 직계 상위 li에 class 부여 */
// function addClassName(current){
// 	let elem = current;
// 	while(elem != null){
// 		elem = elem.parentElement.closest("li");
// 		if(elem != null){
// 			elem.classList.add("current-parent-item")
// 			console.log(elem)
// 		}
// 	}
// }

function findParentTag(current_elem, find_elem, add_class, end_elem){
	let elem = current_elem;
	let findElem = find_elem;
	let addClassName = add_class;
	let endElem = end_elem;
	while(elem != null) {
		elem = elem.parentElement.closest(findElem)
		
		if(elem != null){
			if(elem.querySelector(endElem)) {
				console.log("영역 밖으로 나감")
				return false;
			}
			elem.classList.add(addClassName);
		} else {
			console.log("값없어서 끝남.")
			return false;
		}
	}
}
let main_nav = document.querySelector(".main_nav");
let currentPage = main_nav.querySelector(".current-page-item");
if(currentPage != null){
	findParentTag(currentPage, "li","current-parent-item", ".main_nav"); // 현재거, 찾을거, 영역
}

let side_nav = document.querySelector(".nav_section")
let side_currentPage = side_nav.querySelector(".current-page-item");
if(side_currentPage != null){
	findParentTag(side_currentPage, "div.nav_group","current-parent-item", ".nav_section"); // 현재거, 찾을거, 영역
}



/* flex_row item 갯수에 따라 class 주기(테스트용) */
let flex_row = document.querySelectorAll(".flex_row");
flex_row.forEach(function(item){
	let tempItem = item.querySelectorAll(".item");
	item.classList.add(`col-` + tempItem.length)
})




/* 포트폴리오 상세 이미지 크게 보기 */
let imgList = document.querySelectorAll(".portfolio_img_list a");
imgList.forEach(function(item){
	item.addEventListener("click", function(){
		const node = item.querySelector("img");
		const clone = node.cloneNode(true);
		document.querySelector(".layer.portfolio").style.display = "flex";
		document.querySelector(".layer.portfolio .content .img").appendChild(clone);
	})
})
/* 포트폴리오 상세 이미지 크게 보기 닫기 */
let imgpop_close = document.querySelector(".layer.portfolio .btn_close");
if(imgpop_close != null){
	imgpop_close.addEventListener("click", function(){
		document.querySelector(".layer.portfolio .content .img").innerHTML = ""
		document.querySelector(".layer.portfolio").style.display = "none";
	})
}




/* 재무제표 토글 보기 */
let toggleItem = document.querySelectorAll(".toggle.default .item div.title");
toggleItem.forEach(function(item){
	item.addEventListener("click", function(){
		item.closest(".item").classList.toggle("active")
	})
})




/* IR소식 테이블 */
let ir_table_wrap = document.querySelector(".ir_table_wrap");
if(ir_table_wrap != null) {
	let irItemsTitle = ir_table_wrap.querySelectorAll(".ir_body .ir_title")
	irItemsTitle.forEach(function(item){
		item.addEventListener("click", function(){
			if(item.closest(".ir_item").classList.contains("active")){
				item.closest(".ir_item").classList.remove("active");
			} else {
				let itemSb = item.closest(".ir_list").querySelectorAll(".ir_item");
				itemSb.forEach(function(item){
					item.classList.remove("active")
				})
				item.closest(".ir_item").classList.add("active")
			}
			
		})
	})
}



let btn_open_ask = document.querySelectorAll(".open_ask")
btn_open_ask.forEach(function(item){
	item.addEventListener("click", function(){
		open_ask();
	})
})

let btn_closeLayer = document.querySelector(".layer .btn_close");
btn_closeLayer.addEventListener("click", function(){
	this.closest(".layer").style.display = "none"
})


/* 문의하기 팝업 보기 */
function open_ask(){
	document.querySelector(".layer.customer").style.display = "block"
}


/* 테스트 */
let board_footer = document.querySelector(".board_footer")
if(board_footer) {
	let testPress = board_footer.querySelectorAll("a");
	testPress.forEach(function(item){
		item.addEventListener("click", function(){
			alert("어드민 개발 완료 후 적용 / 이전글 또는 다음글 보기")
		})
	})
}

let board_view = document.querySelector(".board_view");
let page_wrap = document.querySelector(".page_wrap");
if(board_view) {
	let btn_list = page_wrap.querySelector(".btn_list");
	btn_list.addEventListener("click", function(){
		location.href = "./press_list_new.html"
	})
}


let page_list = document.querySelector(".press_list_wrap");
if(page_list) {
	let btn_more = document.querySelector(".btn_more");
	btn_more.addEventListener("click", function(){
		alert("기본 9개 오픈, 더보기 클릭시 + 6")
	})
}





/* 영문 국문 페이지 이동 샘플 */
// 언어 전환 함수
function switchLanguage(lang) {
    const currentUrl = new URL(window.location.href);
    let path = currentUrl.pathname; // 예: /en/html/press/press_list_new.html

    if (lang === 'ko') {
        // 영문 -> 국문: 경로 시작 부분의 /en/을 /로 변경
        if (path.startsWith('/en/')) {
            currentUrl.pathname = path.replace('/en/', '/');
        }
    } else if (lang === 'eng') {
        // 국문 -> 영문: 경로가 /en/으로 시작하지 않을 때만 추가
        if (!path.startsWith('/en/')) {
            currentUrl.pathname = '/en' + path;
        }
    }

    // 변경된 URL로 이동
    window.location.href = currentUrl.toString();
}