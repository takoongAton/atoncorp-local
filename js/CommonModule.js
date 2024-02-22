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

function findParentTag(current_elem, find_elem, add_class, end_elem){
	let elem = current_elem;
	let findElem = find_elem;
	let addClassName = add_class;
	let endElem = end_elem;
	while(elem != null) {
		elem = elem.parentElement.closest(findElem)

		if(elem != null){
			if(elem.querySelector(endElem)) {
				return false;
			}
			elem.classList.add(addClassName);
		} else {
			return false;
		}
	}
}

/* 문의하기 팝업 보기 */
function open_ask(){
	document.querySelector(".layer.customer").style.display = "block"
}

export function init() {

	/* 헤더 그림자 넣기 */
	var header = {
		item : document.querySelector('.header_wrap'),
		header_set : function(pos){
			if(header.item == null) {
				return;
			}
			if(pos > 1) {
				header.item.classList.add('active')
			} else {
				header.item.classList.remove('active')
			}
		}
	}

	/* toggle class active */
	let toggleClass = {
		addClassActive : function(ele){
			ele.classList.add("active");
		},
		removeClassActive : function(ele){
			ele.classList.remove("active");
		}
	}

	/* 위로가기 버튼 */
	let toTop = {
		item : document.querySelector(".toTop"),
		set : function(pos){
			if(pos >= 100){
				toggleClass.addClassActive(toTop.item)
			}else{
				toggleClass.removeClassActive(toTop.item)
			}
		}
	}

	window.addEventListener('scroll', function(){
		let pos = window.scrollY;
		header.header_set(pos); // 그림자 넣기
		toTop.set(pos); // 위로가기 버튼 보이기
	});

	// 사이드 메뉴 닫기
	const close_aside = document.querySelector(".gnb_wrap .nav_wrap .btn_close button");
	if(close_aside != null) {
		close_aside.addEventListener("click", function(){
			document.querySelector(".gnb_wrap").classList.remove("active")
			document.querySelector("body").style.overflow = ""
		})
	}

	/* 기본 높이값 적용 여부 */
	let layout = {
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
		}
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

	/* footer select */
	document.querySelector(".select_wrap div.triger button").addEventListener("click", function() {
		this.parentElement.classList.toggle("active");
	});
	document.querySelector(".select_wrap ul li a, .select_dim").addEventListener("click", function() {
		document.querySelector(".triger").classList.toggle("active")
	});

	layout.action();

	document.querySelector(".megamenu").addEventListener("mouseover", function(){
		document.querySelector(".header_wrap").classList.add("fullMenuOver");
		document.querySelector(".header_wrap").style.backgroundColor = "#fff";
		document.querySelector(".header_wrap .ask").classList.add("active");
	});

	document.querySelector(".megamenu").addEventListener("mouseleave", function(){
		document.querySelector(".header_wrap").classList.remove("fullMenuOver");
		document.querySelector(".header_wrap").style.backgroundColor = ""
		document.querySelector(".header_wrap .ask").classList.remove("active");
	});

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

	/* flex_row item 갯수에 따라 class 주기 */
	document.querySelectorAll(".flex_row").forEach(function(item){
		let tempItem = item.querySelectorAll(".item");
		item.classList.add(`col-` + tempItem.length)
	})

	/* 포트폴리오 상세 이미지 크게 보기 */
	document.querySelectorAll(".portfolio_img_list a").forEach(function(item){
		item.addEventListener("click", function(){
			const node = item.querySelector("img");
			const clone = node.cloneNode(true);
			document.querySelector(".layer.portfolio").style.display = "flex";
			document.querySelector(".layer.portfolio .content .img").appendChild(clone);
		})
	})

	/* 포트폴리오 상세 이미지 크게 보기 닫기 */
	var imgpop_close = document.querySelector(".layer.portfolio .btn_close");
	if(imgpop_close != null){
		imgpop_close.addEventListener("click", function(){
			document.querySelector(".layer.portfolio .content .img").innerHTML = ""
			document.querySelector(".layer.portfolio").style.display = "none";
		})
	}

	/* 재무제표 토글 보기 */
	document.querySelectorAll(".toggle.default .item div.title").forEach(function(item){
		item.addEventListener("click", function(){
			item.closest(".item").classList.toggle("active")
		})
	})

	/* IR소식 테이블 */
	var ir_table_wrap = document.querySelector(".ir_table_wrap")
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

	document.querySelectorAll(".open_ask").forEach(function(item){
		item.addEventListener("click", function(){
			open_ask();
		})
	})

	document.querySelector(".layer .btn_close").addEventListener("click", function(){
		this.closest(".layer").style.display = "none"
	})

	toTop.item.addEventListener("click", function(){
		scrollToTop(300);
	});
};