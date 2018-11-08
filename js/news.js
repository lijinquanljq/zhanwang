/*
* @Author: 李金泉
* @Date:   2018-09-17 10:50:35
* @Last Modified by:   admin
* @Last Modified time: 2018-09-24 23:13:55
*/

//content
$(".pic").mouseenter(function(){
    $(this).children("img").stop().animate({width:"200%",height:"200%"})   
})
$(".pic").mouseleave(function(){
    $(this).children("img").stop().animate({width:"100%",height:"100%"}) 
})


$(function(){
$('.aa li').click(function(event) {
	$(this).css('border-bottom', '3px solid #00adfe');
	$(this).siblings('li').css('border-bottom', '3px solid transparent');
});

$('.article').mouseenter(function(event) {
	$(this).css({'borderLeft':'1px solid #2e5f9d','borderRight':'1px solid #2e5f9d'});
	$(this).children('.article_t').stop().animate({left:'20px'});
});
$('.article').mouseleave(function(event) {
	$(this).css({'borderLeft':'none','borderRight':'none'});
	$(".article_t").stop().animate({left:'0px'});
});
$('.article_a').mouseenter(function(event) {
	$(this).css({'borderLeft':'1px solid #2e5f9d','borderRight':'1px solid #2e5f9d'});
	$(this).children('.article_t').stop().animate({left:'20px'},200);
});
$('.article_a').mouseleave(function(event) {
	$(this).css({'borderLeft':'none','borderRight':'none'},200);
	$(".article_t").stop().animate({left:'0px'});
});

	var m=0;
    $(".clk").click(function(){
    	
    	m++;
    	if(m>=1){
    		$('.y').show();
    	}
    	if(m>=2){
    		$('.y').show();
    		$('.yy').show();
    	}
    	if(m>=3){
    		$('.y').show();
    		$('.yy').show();
    		$('.yyy').show();
    	}
    	
        
    });


})