/*
* @Author: admin
* @Date:   2018-08-29 18:52:27
* @Last Modified by:   李金泉
* @Last Modified time: 2018-11-07 21:05:08
*/
window.onload=function(){
	var off=true
	var off2=true
	var off3=true
	var off4=true
	function kg(a){
		return document.getElementsByClassName(a)[0]
	}
user.onclick=function(){
		
	if(off){
		kg('dians').style.display="none"
		kg('fw').style.display="none"
		kg('play_nr').style.display="none"
		kg('sel').style.display="block"
		sj.style.display="block"
		off=false
		off3=true
		off2=true
		off4=true
		 }
	else {
		kg('sel').style.display="none"
		sj.style.display="none"
		off=true
	}	
}
	game.onclick=function(){
		if(off2){
			kg('dians').style.display="none"
			kg('fw').style.display="none"
			kg('play_nr').style.display="block"
			kg('sel').style.display="none"
			sj.style.display="none"
			off2=false
			off3=true
			off4=true
			off=true
			 }
		else {
			kg('play_nr').style.display="none"
			off2=true
		}	
	}
	hel.onclick=function(){
		if(off3){
			kg('dians').style.display="none"
			kg('fw').style.display="block"
			kg('play_nr').style.display="none"
			kg('sel').style.display="none"
			sj.style.display="none"
			off3=false
			off4=true
			off2=true
			off=true
			 }
		else {
			kg('fw').style.display="none"
			off3=true
		}	
	}
	rmb.onclick=function(){
		if(off4){
			kg('dians').style.display="block"
			kg('fw').style.display="none"
			kg('play_nr').style.display="none"
			kg('sel').style.display="none"
			sj.style.display="none"
			off4=false
			off3=true
			off2=true
			off=true
			 }
		else {
			kg('dians').style.display="none"
			off4=true
		}	
	}
}
//轮播图
	$(document).ready(function() {	
	var a=0
	var b=0
	var timer1
	$('#fot ul li').eq(0).css('backgroundColor','#018bcc');
	function aa(){
	 timer1=setInterval(function(){
		a++
		b++
		if(a>4){
			a=0
			$('#ban').css({"left":-a*100+'%'})
			a=1
		}
		$('#ban').stop().animate({"left":-a*100+'%'},500)
		if(b>3){b=0}
		$('#fot ul li').eq(b).css('backgroundColor','#018bcc').siblings().css('backgroundColor','#8c8484')
		setTimeout(function(){
			$('#ban li').eq(b).addClass('current')
			$('#ban li').eq(b).siblings().removeClass('current')
		},500)
		// $('#ban li button').css({'transform':'1','left':'80px'})
	},2000)
	 	
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
			a++
			b++
			if(a>4){
			a=0
			$('#ban').css({"left":-a*100+'%'})
			a=1
		}
			$('#ban').stop().animate({"left":-a*100+'%'}, 500)
			if(b>3){b=0}
		$('#fot ul li').eq(b).css('backgroundColor','#018bcc').siblings().css('backgroundColor','#8c8484')
		setTimeout(function(){
			$('#ban li').eq(b).addClass('current')
			$('#ban li').eq(b).siblings().removeClass('current')
		},500)
	});
	//点击右换图
	$('.banner_one span').eq(1).click(function(event) {
			clearInterval(timer1)
			a--
			b--
			if(a<0){
			a=4
			$('#ban').css({"left":-a*100+'%'})
			a=3
		}
			$('#ban').stop().animate({"left":-a*100+'%'}, 500)
			if(b<0){b=3}
		$('#fot ul li').eq(b).css('backgroundColor','#018bcc').siblings().css('backgroundColor','#8c8484')
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
			$('#ban').stop().animate({"left":-index*100+'%'}, 500)
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
	//foot_h logo
		$('.foot_h img').hover(function() {
			$(this).css({"transform":"scale(1.3)"})
		}, function() {
			$(this).css({"transform":"scale(1)"})
		});						

	//游戏产品
	var pre=[
	// {
	// 	"imgSrc":"images/c074270c5024a5bb627d46cddf024dad-prod-card-tall.jpg",
	// 	"txt":"《炉石传说&reg;》",
	// 	"pp":"策略类卡牌游戏",
	// 	"sp":"免费游戏",
	// 	"logo":"images/hearthstone.svg"
	// },
	{
		"imgSrc":"images/mo.jpg",
		"txt":"《魔兽世界&reg;》",
		"pp":"游戏时间",
		"sp":"￥75起",
		"logo":"images/world-of-warcraft.svg"
	},
	{
		"imgSrc":"images/shou.jpg",
		"txt":"《守望先锋&reg;》：传奇典藏版",
		"pp":"团队射击游戏",
		"sp":"￥158起",
		"logo":"images/overwatch.svg"
	},
	{
		"imgSrc":"images/xing2.jpg",
		"txt":"《星际争霸II&reg;》",
		"pp":"即时策略游戏",
		"sp":"免费游戏",
		"logo":"images/starcraft-ii.svg"
	},
	{
		"imgSrc":"images/feng.jpg",
		"txt":"《风暴英雄&reg;》",
		"pp":"多人在线战术竞技游戏",
		"sp":"免费游戏",
		"logo":"images/heroes-of-the-storm.svg"
	},
	{
		"imgSrc":"images/魔.png",
		"txt":"《魔兽世界&reg;》：《争霸艾泽拉斯》",
		"pp":"礼包",
		"sp":"￥240",
		"logo":"images/world-of-warcraft.svg"
	},
	{
		"imgSrc":"images/anhei.jpg",
		"txt":"《暗黑破坏神III&reg;》：《夺魂之镰》",
		"pp":"动作角色扮演游戏",
		"sp":"￥198起",
		"logo":"images/hearthstone.svg"
	},
	{
		"imgSrc":"images/jingdian.jpg",
		"txt":"经典",
		"pp":"奥术之尘礼包",
		"sp":"￥60起",
		"logo":"images/hearthstone.svg"
	},
	]
	for(var i=0;i<pre.length;i++){
	var tag=$('#Games li').eq(0).clone(true)
	tag.css({"backgroundImage":'url('+pre[i].imgSrc+')'});
	tag.children('img').attr('src',pre[i].logo)
	tag.children('h5').html(pre[i].txt)
	tag.children('p').html(pre[i].pp)
	tag.children('span').html(pre[i].sp)
	$('#Games').append(tag)
	
}
	for(var i=0;i<pre.length;i++){
	var tag=$('#Games2 li').eq(0).clone(true)
	tag.css({"backgroundImage":'url('+pre[i].imgSrc+')'});
	tag.children('img').attr('src',pre[i].logo)
	tag.children('h5').html(pre[i].txt)
	tag.children('p').html(pre[i].pp)
	tag.children('span').html(pre[i].sp)
	$('#Games2').append(tag)
	
}
	//列表放大
		$('#Games li').hover(function() {
			$(this).css({"transform":"scale(1.05)"})
		}, function() {
			$(this).css({"transform":"scale(1)"})
		});	
		$('#Games2 li').hover(function() {
			$(this).css({"transform":"scale(1.05)"})
		}, function() {
			$(this).css({"transform":"scale(1)"})
		});				
	//鼠标滚轮
		$(window).scroll(function(event) {
			if($(window).scrollTop()>$(window).height()+200){
				$('.gg_right').children('img').removeClass('bh')
			}
		});
	//回到顶部
		 $("#path").click(function(){
         $("html").animate({"scrollTop": "0px"},500);
         $("body").animate({"scrollTop": "0px"},500);
        });
	 $(window).scroll(function(){
                if($(window).scrollTop()>200){
                    $("#path").fadeIn(500);
                }else{
                    $("#path").fadeOut(500);
                }
            });


});

