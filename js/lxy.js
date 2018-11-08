/*
* @Author: admin
* @Date:   2018-08-29 18:52:27
* @Last Modified by:   admin
* @Last Modified time: 2018-09-18 10:21:23
*/
window.onload=function(){
	var off=true
	var off2=true
	var off3=true
	var off4=true
	
	function kg(a){
		return document.getElementsByClassName(a)[0]
	}
	function aa(a){
		return document.getElementById(a)
	}
user.onclick=function(){
	if(off){
		kg('dians').style.display="none"
		kg('fw').style.display="none"
		kg('play_nr').style.display="none"
		kg('sel').style.display="block"
		sj.style.display="none"
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
			option1.onclick=function(){
			aa("option2").style.backgroundColor='#212937'
			aa("option2").style.borderLeftColor='transparent'
			// document.getElementById('option1').children[1].children[0].style.color='#d2d4d7'
			this.style.backgroundColor='#1f394c'
			this.style.borderLeftColor='#00aeff'
			// document.getElementById('option1').children[1].children[0].style.color='#fff'
			}
			option2.onclick=function(){
			aa("option1").style.backgroundColor='#212937'
			aa("option1").style.borderLeftColor='transparent'
			this.style.backgroundColor='#1f394c'
			this.style.borderLeftColor='#00aeff'
			}
			option1.onmouseenter=function(){
			aa("option1").style.color='#d2d4d7'
			aa("pic1").style.opacity='1'
			this.style.color='#fff'
			pic1.style.opacity='0.9'
	}
			option1.onmouseleave=function(){
			aa("option1").style.color='#fff'
			aa("pic1").style.opacity='0.9'
			this.style.color='#d2d4d7'
			pic1.style.opacity='1'
	}
			option2.onmouseenter=function(){
			aa("option2").style.color='#d2d4d7'
			aa("pic2").style.opacity='1'
			this.style.color='#fff'
			pic2.style.opacity='0.9'
	}
			option2.onmouseleave=function(){
			aa("option2").style.color='#fff'
			aa("pic2").style.opacity='0.9'
			this.style.color='#d2d4d7'
			pic2.style.opacity='1'
	}
			btn1.onmouseenter=function(){
			aa("btn1").style.backgroundColor='#0e86ca'
			this.style.backgroundColor='#10a1de'
	}
			btn1.onmouseleave=function(){
			aa("btn1").style.backgroundColor='#0e86ca'
			this.style.backgroundColor=''
	}

			btn2.onmouseenter=function(){
			aa("btn2").style.borderColor='#0e86ca'
			aa("btn2").style.color='#0f95d5'
			this.style.borderColor='#10a1de'
			this.style.color='#10a1de'
	}
			btn2.onmouseleave=function(){
			aa("btn2").style.borderColor='#0e86ca'
			aa("btn2").style.color='#0f95d5'
			this.style.borderColor=''
			this.style.color=''
	}
			path.onmouseenter=function(){
				this.children[0].src='../images/sanjiao2.svg';
	}
			path.onmouseleave=function(){
				this.children[0].src='../images/sanjiao1.svg';
	}
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

}