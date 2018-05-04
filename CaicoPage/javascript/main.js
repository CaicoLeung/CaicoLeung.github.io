;$(function(){
	"use strict";
	var body=$("body");
	var header=$("#header");
	var nav=$("#nav");
	var menuToggle=$(".menuToggle");
	var menu_item=$(".menu-item");
	var close=$("#close");
	var mask=$("#mask");
	var backtoTop=$("#backtoTop");
	var logo=$("#logo");
	var more=$(".more");
//	body.addClass("is-loading");
	$(window).on('load', function() {
				window.setTimeout(function() {
					body.removeClass("is-loading");
					},200);
				});
/*	function bannerH(){setInterval(function(){
		banner.height($(window).height());
	},0);}
	bannerH();*/  //已用height=100vh；实现。
	menuToggle.on('click',function(){
		menu_item.animate({
			width:'show',
			marginRight:'show',
			marginLeft:'show',
			paddingRight:'show',
			paddingLeft:'show'
		},500);
		mask.addClass("mask");
	});
	close.on('click',function(){
		menu_item.animate({
			width:'hide',
			marginRight:'hide',
			marginLeft:'hide',
			paddingRight:'hide',
			paddingLeft:'hide'
		},500);
		mask.removeClass("mask");
	});
	mask.on('click',function(){
		menu_item.animate({
			width:'hide',
			marginRight:'hide',
			marginLeft:'hide',
			paddingRight:'hide',
			paddingLeft:'hide'
		},300);
		mask.removeClass("mask");
	});
	backtoTop.on('click',function(){
		$("html").animate({
			scrollTop:0
		},1000);
	});
	$(window).on('scroll',function(){
		if($(window).scrollTop()>=$(window).height()-nav.height())
			{
				backtoTop.fadeIn();
				header.css("background-color","rgba(45,56,66,1.00");
				logo.show();
			}
		else{
			backtoTop.fadeOut();
			header.css("background-color","transparent");
			logo.hide();
		}
	});
	more.on('click',function(){
		$("html").animate({
			scrollTop:$(window).height()-nav.height()
		},1000);
	});
});