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
});


/* 헤더 그림자 넣기 */
var header;
header = {
	item : document.querySelector('header'),
	header_set : function(pos){
		if(header.item == null) {
			return;
		}
		if(pos > header.item.offsetHeight) {
			header.item.classList.add('active')
		} else {
			header.item.classList.remove('active')
		}
		// (pos > header.item.offsetHeight * 1.5) ? header.item.classList.add('active') : header.item.classList.remove('active');
	}
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


$("dt").on("click", function(){
	$(this).parent("dl").find("dd").stop().slideToggle(100)
})

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


var header,
	lnb,
	familysite,
	d_picker,
	bf_scroll,
	mainBanner,
	mainFloating,
	mainDiet,
	myShopping,
	c_layer,
	c_slide,
	c_select,
	c_radio,
	c_check,
	c_tab,
	c_gallery,
	number_controll,
	loading,
	reviews,
	icon_tooltip,
	page_scroll,
	chart;


/*
 * layout ui event
 * scroll down & up -> header fix function
 */
header = {
	$wrap : $('.wrap'),
	header_set : function(pos){
		if(pos >= $(".header_wrap").height()){
			layout.$wrap.addClass('header-fix');
		}else{
			layout.$wrap.removeClass('header-fix');
		}
	},
	header_set : function(pos){
		// if(pos >= $(".header_wrap").height()){
		if(pos > 0){	
			layout.$wrap.addClass('header-fix');
		}else{
			layout.$wrap.removeClass('header-fix');
		}
	},

}


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