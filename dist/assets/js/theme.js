!function(e){"use strict";e(".wow").length&&new WOW({boxClass:"wow",animateClass:"animated",offset:250,mobile:!0,live:!0}).init();e(".accrodion-grp").length&&e(".accrodion-grp").each((function(){var t=e(this).data("grp-name"),a=e(this),i=a.find(".accrodion");a.addClass(t),a.find(".accrodion .accrodion-content").hide(),a.find(".accrodion.active").find(".accrodion-content").show(),i.each((function(){e(this).find(".accrodion-title").on("click",(function(){!1===e(this).parent().hasClass("active")&&(e(".accrodion-grp."+t).find(".accrodion").removeClass("active"),e(".accrodion-grp."+t).find(".accrodion").find(".accrodion-content").slideUp(),e(this).parent().addClass("active"),e(this).parent().find(".accrodion-content").slideDown())}))}))}));if(e(".quantity-spinner").length&&e("input.quantity-spinner").TouchSpin({}),e(".product-details__thumb-carousel").length)var t=new Swiper(".product-details__thumb-carousel",{slidesPerView:5,spaceBetween:10,freeMode:!0,speed:1400,watchSlidesVisibility:!0,watchSlidesProgress:!0,loop:!0,autoplay:{delay:5e3}});if(e(".product-details__carousel").length)new Swiper(".product-details__carousel",{observer:!0,observeParents:!0,speed:1400,mousewheel:!0,autoplay:{delay:5e3},thumbs:{swiper:t}});if(e(".main-navigation .navigation-box .submenu").length){e(".main-navigation .submenu").parent("li").children("a").append((function(){return'<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>'}));var a=e(".header-navigation .menu-toggler"),i=e(".main-navigation .sub-nav-toggler");a.on("click",(function(){var t=e(this),a=t.closest(".header-navigation").find(t.data("target"));return e(a).slideToggle(),e(a).toggleClass("showen"),!1})),i.on("click",(function(){return e(this).parent().parent().children(".submenu").slideToggle(),!1}))}if(e(".img-popup").length){var n={};e(".img-popup").each((function(){var t=parseInt(e(this).attr("data-group"),10);n[t]||(n[t]=[]),n[t].push(this)})),e.each(n,(function(){e(this).magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,gallery:{enabled:!0}})}))}if(e(".video-popup").length&&e(".video-popup").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!0,fixedContentPos:!1}),e(".counter").length&&e(".counter").counterUp({delay:10,time:3e3}),e(".stricky").length&&e(".stricky").addClass("original").clone(!0).insertAfter(".stricky").addClass("stricked-menu").removeClass("original"),e(".banner-carousel__one").length&&(e(".banner-carousel__one").owlCarousel({loop:!0,items:1,margin:0,dots:!0,nav:!1,animateOut:"slideOutDown",animateIn:"fadeIn",active:!0,smartSpeed:1e3,autoplay:5e3}),e(".banner-carousel-btn .left-btn").on("click",(function(){return e(".banner-carousel__one").trigger("next.owl.carousel"),!1})),e(".banner-carousel-btn .right-btn").on("click",(function(){return e(".banner-carousel__one").trigger("prev.owl.carousel"),!1}))),e(".scroll-to-target").length&&e(".scroll-to-target").on("click",(function(){var t=e(this).attr("data-target"),a=e(this).attr("data-target-offset");return e("html, body").animate({scrollTop:e(t).offset().top-a},1e3),!1})),e(".appointment-one__switch-wrap").length&&e(".appointment-one__switch-wrap").each((function(){var t=e(this),a=t.find(".appointment-one__switch"),i=t.find("input[type=hidden]"),n=t.find(".appointment-one__switch.active").text();i.val(n),a.on("click",(function(){a.removeClass("active"),e(this).addClass("active");var n=t.find(".appointment-one__switch.active").text();i.val(n),console.log(n)})),console.log(n)})),e(".contact-form-vaidated").length&&e(".contact-form-vaidated").validate({rules:{name:{required:!0},fname:{required:!0},lname:{required:!0},email:{required:!0,email:!0},message:{required:!0},subject:{required:!0},booking_date:{required:!0}},submitHandler:function(t){return e.post(e(t).attr("action"),e(t).serialize(),(function(a){e(t).parent().find(".result").append(a),e(t).find('input[type="text"]').val(""),e(t).find('input[type="email"]').val(""),e(t).find("textarea").val("")})),!1}}),e(".datepicker").length&&e(".datepicker").datepicker(),e(".testimonials-one__carousel").length){if(void 0!==e(".testimonials-one__carousel").data("carousel-margin"))var o=e(".testimonials-one__carousel").data("carousel-margin");else o=80;e(".testimonials-one__carousel").owlCarousel({loop:!0,margin:o,nav:!1,navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],dots:!0,autoWidth:!1,autoplay:!0,smartSpeed:700,autoplayTimeout:5e3,autoplayHoverPause:!0,responsive:{0:{items:1},480:{items:1},600:{items:1},991:{items:1},1e3:{items:2},1200:{items:2}}})}e(".testimonials-two__carousel").length&&e(".testimonials-two__carousel").owlCarousel({loop:!0,margin:0,nav:!0,navText:['<i class="material-icons">keyboard_arrow_left</i>','<i class="material-icons">keyboard_arrow_right</i>'],dots:!0,autoWidth:!1,autoplay:!0,smartSpeed:700,autoplayTimeout:5e3,autoplayHoverPause:!0,responsive:{0:{items:1},480:{items:1},600:{items:1},991:{items:1},1e3:{items:1},1200:{items:1}}}),e(".testimonials-three__carousel").length&&e(".testimonials-three__carousel").owlCarousel({loop:!0,margin:30,nav:!1,navText:['<i class="material-icons">keyboard_arrow_left</i>','<i class="material-icons">keyboard_arrow_right</i>'],dots:!1,autoWidth:!1,autoplay:!0,smartSpeed:700,autoplayTimeout:5e3,autoplayHoverPause:!0,responsive:{0:{items:1},480:{items:1},600:{items:2},991:{items:3},1e3:{items:3},1200:{items:3}}}),e(".recent-products__carousel").length&&e(".recent-products__carousel").owlCarousel({loop:!0,margin:30,nav:!0,navText:['<i class="material-icons">keyboard_arrow_left</i>','<i class="material-icons">keyboard_arrow_right</i>'],dots:!1,autoWidth:!1,autoplay:!0,smartSpeed:700,autoplayTimeout:5e3,autoplayHoverPause:!0,responsive:{0:{items:1},480:{items:1},600:{items:2},991:{items:3},1e3:{items:4},1200:{items:4}}}),e(window).on("scroll",(function(){if(e(".scroll-to-top").length){e(window).scrollTop()>100?e(".scroll-to-top").fadeIn(500):e(this).scrollTop()<=100&&e(".scroll-to-top").fadeOut(500)}if(e(".stricked-menu").length){var t=e(".stricked-menu");e(window).scrollTop()>100?t.addClass("stricky-fixed"):e(this).scrollTop()<=100&&t.removeClass("stricky-fixed")}})),e(window).on("load",(function(){!function(){if(e(".masonary-layout").length&&e(".masonary-layout").isotope({layoutMode:"masonry",itemSelector:".masonary-item"}),e(".masonary-layout-no-grid-width").length&&e(".masonary-layout-no-grid-width").isotope({layoutMode:"masonry",itemSelector:".masonary-item"}),e(".post-filter").length){var t=e(".post-filter li");t.children("span").on("click",(function(){var a=e(this),i=a.parent().attr("data-filter");return t.children("span").parent().removeClass("active"),a.parent().addClass("active"),e(".filter-layout").isotope({filter:i,animationOptions:{duration:500,easing:"linear",queue:!1}}),!1}))}e(".post-filter.has-dynamic-filter-counter").length&&e(".post-filter.has-dynamic-filter-counter").find("li").each((function(){var t=e(this).data("filter"),a=e(".gallery-content").find(t).length;e(this).children("span").append('<span class="count"><b>'+a+"</b></span>")}))}(),e(".preloader").length&&e(".preloader").fadeOut("slow"),e(".team-three__slider").length&&e(".team-three__slider").bxSlider({auto:!0,controls:!0,nextText:" ",prevText:" ",pause:5e3,speed:500,pager:!0,pagerCustom:".team-three__pager"})}))}(jQuery);
//# sourceMappingURL=theme.js.map