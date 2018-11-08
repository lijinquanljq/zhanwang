/*
* @Author: admin
* @Date:   2018-09-18 10:20:19
* @Last Modified by:   admin
* @Last Modified time: 2018-09-19 09:27:13
*/
window.onload=function(){
	function aa(a){
		return document.getElementById(a)
	}
	function bb(a){
		return document.getElementsByTagName(a)
	}
		setTimeout(function(){
	            // video.play()
	        },100)
		txt2.onmouseenter=function(){
				this.style.borderColor='#00aeff'
				aa("right").style.backgroundSize='110% 110%';
	}
		txt2.onmouseleave=function(){
				this.style.borderColor='#263f5d'
				aa("right").style.backgroundSize='100% 100%';
	}
		txt3.onmouseenter=function(){
				this.style.backgroundColor='#003b6c'
				this.style.borderColor='#00aeff'
				aa('img').style.backgroundSize='110% 110%';
		}
		txt3.onmouseleave=function(){
				this.style.backgroundColor='#003465'
				this.style.borderColor='#263f5d'
				aa('img').style.backgroundSize='100% 100%';
		}
		txt4.onmouseenter=function(){
				this.style.backgroundColor='#003b6c'
				this.style.borderColor='#00aeff'
				aa('img2').style.backgroundSize='110% 110%';
		}
		txt4.onmouseleave=function(){
				this.style.backgroundColor='#003465'
				this.style.borderColor='#263f5d'
				aa('img2').style.backgroundSize='100% 100%';
		}
		$('.con').children('img').eq(0).hover(function() {
			$(this).attr({'src':'../images/zuo2.png'})
		}, function() {
			$(this).attr({'src':'../images/zuo.png'})
		});
		$('.con').children('img').eq(1).hover(function() {
			$(this).attr({'src':'../images/yuan2.png'})
		}, function() {
			$(this).attr({'src':'../images/yuan.png'})
		});
		$('.con').children('img').eq(2).hover(function() {
			$(this).attr({'src':'../images/you2.png'})
		}, function() {
			$(this).attr({'src':'../images/you.png'})
		});
		$('.right ul li').hover(function(){
			$(this).children().children().children().attr({'src':'../images/you3.png'});
		},function(){
			$(this).children().children().children().attr({'src':'../images/you4.png'});
		})
		$('.know').hover(function(){
				$(this).children().css('backgroundSize', '110% 110%');
				$(this).children().children('img').attr({'src':'../images/you3.png'})
				
		},function(){
				$(this).children().css('backgroundSize', '100% 100%');
				$(this).children().children('img').attr({'src':'../images/you4.png'})
		})
		$('.firstline').hover(function() {
			$(this).children().eq(2).attr({'src':'../images/shangxia2.svg'});
		}, function() {
			$(this).children().eq(2).attr({'src':'../images/shangxai1.svg'});
		});
}