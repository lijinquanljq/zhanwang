/*
* @Author: admin
* @Date:   2018-09-20 14:51:55
* @Last Modified by:   admin
* @Last Modified time: 2018-09-27 16:02:58
*/
window.onload=function(){
	var off=true
	var off2=true
	var off3=true
	var num=0;
	function aa(a){
		return document.getElementById(a)
	}
	function kg(a){
		return document.getElementsByClassName(a)[0]
	}
		// var num=0;
	// $('#game').click(function(event) {
	// 	$('.nav-bar').toggle();
	// 	num++;
	// 	if(num%2==0){
	// 		$('.section').stop().slideUp(600)
			
	// 	}else{
	// 		$('.section').stop().slideDown(600)
	// 	}
	// });
	game.onclick=function(){
		if(off){
		kg('option3').style.display="none"
		kg('nav-bar2').style.display="none"
		kg('nav-bar').style.display="block"
		off=false
		off2=true
		off3=true
		$('.section').stop().slideDown(600)
		 }
	else {
		kg('nav-bar').style.display="none"
		off=true
		$('.section').stop().slideUp(600)
	}
	}
	play.onclick=function(){
		if(off2){
		kg('option3').style.display="none"
		kg('nav-bar2').style.display="block"
		kg('nav-bar').style.display="none"
		off=true
		off2=false
		off3=true
		$('.section2').stop().slideDown(600)
		 }
	else {
		kg('nav-bar2').style.display="none"
		off2=true
		$('.section2').stop().slideUp(600)
	}	

	}
	account.onclick=function(){
		if(off3){
		kg('option3').style.display="block"
		kg('nav-bar2').style.display="none"
		kg('nav-bar').style.display="none"
		off=true
		off2=true
		off3=false
		 }
	else {
		kg('option3').style.display="none"
		off3=true
	}	
	}
	$('.option_game').children().children('img').hover(function() {
		$(this).css({'border-color':'rgb(255, 255, 255,0.2)'})
		$(this).css({'opacity':'1'})
	}, function() {
		$(this).css({'border-color':'#383939'})
		$(this).css({'opacity':'0.9'})
	});

	$('.option2 ul').children('li').hover(function() {
		$(this).children('img').css({'opacity':'1'})
		$(this).children('a').css({'color':'#fff'})
	}, function() {
		$(this).children('img').css({'opacity':'0.8'})
		$(this).children('a').css({'color':'#b5b5b5'})
	});

	// var num=0;
	// $('#play').click(function(event) {
	// 	$('.nav-bar2').toggle();
	// 	num++;
	// 	if(num%2==0){
	// 		$('.section2').stop().slideUp(600)
	// 	}else{
	// 		$('.section2').stop().slideDown(600)
	// 	}
	// });

	$('.section2').hover(function() {
		$(this).children('a').css({'color':'#fff'})
	}, function() {
		$(this).children('a').css({'color':'#b5b5b5'})
	});

	// $('#account').click(function(event) {
	// 	$('.option3').toggle();
	// 	num++;
	// 	if(num%2==0){
	// 		$('.section2').stop().slideUp(600)
	// 	}else{
	// 		$('.section2').stop().slideDown(600)
	// 	}
	// });

	$('.option3 .sel ul li').hover(function() {
		console.log(1)
		$(this).children('a').css({'color':'#fff'})
	}, function() {
		$(this).children('a').css({'color':'#b9babd'})
	});

}
	