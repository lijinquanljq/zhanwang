/*
* @Author: admin
* @Date:   2018-09-18 10:27:06
* @Last Modified by:   冉郑伟
* @Last Modified time: 2018-09-24 10:05:41
*/
//轮播图
	$(document).ready(function() {	
	var a=0
	var b=0
	var timer1
	$('#fot ul li').eq(0).css('backgroundColor','#018bcc');
	$('#ban li').eq(0).addClass('current')
	$('#fot ul li').eq(0).children().stop().animate({'width':'100%'},2900)
	function aa(){
	 timer1=setInterval(function(){
		a++
		b++
		if(a>5){a=0}
			$('#ban li').eq(a).addClass('current')
			$('#ban li').eq(a).siblings().removeClass('current')
		
		if(b>5){b=0}
		$('#fot ul li').eq(b).css('backgroundColor','#018bcc').siblings().css('backgroundColor','#8c8484')
		$('#fot ul li').eq(b).children().stop().animate({'width':'100%'},2900)
		$('#fot ul li').eq(b).siblings().children().css('width','0%')
	},3000)
	 	
}
	aa()
	//鼠标移入轮播图
	$('.banner_one').hover(function(event) {
			clearInterval(timer1)
			$(this).children('span').stop().fadeIn(500)
	},function(){
			$(this).children('span').stop().fadeOut(500)
			setTimeout(aa(),1000)
	});
	//点击左换图
	$('.banner_one span').eq(0).click(function(event) {
			clearInterval(timer1)
			$('.fot_s').stop().css('width','0%')
			a++
			b++
			if(a>5){
			a=0
		}
			$('#ban li').eq(a).addClass('current')
			$('#ban li').eq(a).siblings().removeClass('current')
			if(b>5){b=0}
		$('#fot ul li').eq(b).css('backgroundColor','#018bcc').siblings().css('backgroundColor','#8c8484')

		setTimeout(function(){
			$('#ban li').eq(b).addClass('current')
			$('#ban li').eq(b).siblings().removeClass('current')
		},500)
	});
	//点击右换图
	$('.banner_one span').eq(1).click(function(event) {
			clearInterval(timer1)
			$('.fot_s').stop().css('width','0%')
			a--
			b--
			if(a<0){
			a=5
		}
			$('#ban li').eq(a).addClass('current')
			$('#ban li').eq(a).siblings().removeClass('current')
			if(b<0){b=5}
		$('#fot ul li').eq(b).css('backgroundColor','#018bcc').siblings().css('backgroundColor','#8c8484')
		$('#fot ul li').eq(b).siblings().children().css('width','0%')
		setTimeout(function(){
			$('#ban li').eq(b).addClass('current')
			$('#ban li').eq(b).siblings().removeClass('current')
		},500)
	});
	//点击#fot
		$('#fot ul li').click(function(event) {
			clearInterval(timer1)
			var index=$(this).index()
			a=index
			b=index
			$(this).css('backgroundColor','#018bcc').siblings().css('backgroundColor','#8c8484')
			$('#ban li').eq(a).addClass('current')
			$('#ban li').eq(a).siblings().removeClass('current')
			$('.fot_s').stop().css('width','0%')
		});
	//移入#fot
		$('#fot ul li').hover(function(event) {
			$(this).stop().animate({'opacity':'0.5'}, 500)
		},function(event){
			$(this).stop().animate({'opacity':'1'}, 500)
		});
	//轮播button
		$('#ban li button').hover(function(event){
			$(this).css({'backgroundColor':'#10a1de'}, 300)
		}, function(event){
			$(this).css({'backgroundColor':'#0e86ca'}, 300)
		});	
	//移入youxi li
		$('.youxi ul li').hover(function() {
			$(this).children().show()
			$(this).css('borderColor','#26BAFF')
		}, function() {
			$(this).children().hide()
			$(this).css('border-color','rgba(255,255,255,0.4)')
		});
	//移入buy button
		$('.buy button').hover(function() {
			$(this).css('backgroundColor','#10a1de')
		}, function() {
			$(this).css('backgroundColor',' #0e86ca')
		});
	//移入 buy h5
		$('.buy h5').hover(function() {
			$(this).children('svg').css('color', '#fff');
		}, function() {
			$(this).children('svg').css('color', ' #00AEFF');
		});	
	//ft span hover
		$('.ft span').hover(function() {
			$(this).css('color', '#b6c1cd');
		}, function() {
			$(this).css('color', ' #00aeff');
		});	
	//移入 news hover
		$('.news ul li').hover(function() {
			$(this).css({'border-color': '#4B84CF','opacity':'1'});
			$(this).children().eq(0).css('background-size','110% 110%')
		}, function() {
			$(this).css({'border-color': '  #26507b','opacity':'0.9'});
			$(this).children().eq(0).css('background-size','100% 100%')
		});	
	//offer 背景轮播
		var pic=0
		setInterval(function(){
			 pic++
			if(pic>4){pic=0}
			console.log('url(../images/ranbg'+pic+'.jpg)')
			$('.offer').css('background-image','url(../images/ranbg'+pic+'.jpg)')

		},3500)

})