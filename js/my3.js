/*
* @Author: 香芋
* @Date:   2018-09-24 21:58:28
* @Last Modified by:   香芋
* @Last Modified time: 2018-09-24 22:51:08
*/

window.onload=function(){
	function bb(a){
		return document.getElementsByTagName(a)
	}
	$('input').hover(function() {
		$(this).css({'borderColor':'#fff'})
	}, function() {
		$(this).css({'borderColor':'#51575d'})
	});
	$('.btn1').hover(function() {
		$(this).css({'backgroundColor':'#00aeff'})
	}, function() {
		$(this).css({'backgroundColor':'#0e86ca'})
	});
	$('.btn2').hover(function() {
		$(this).css({'borderColor':'#0e86ca'})
		$(this).css({'color':'#91e4ff'})
	}, function() {
		$(this).css({'borderColor':'#0d639f'})
		$(this).css({'color':'#059fff'})
	});
	$('.yzm').children('span').hover(function() {
		$(this).css({'borderColor':'#0e86ca'})
		$(this).css({'color':'#91e4ff'})
	}, function() {
		$(this).css({'borderColor':'#0d639f'})
		$(this).css({'color':'#059fff'})
	});
}