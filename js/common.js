/*!	文档说明：
 *	说明：公共js
 *	作者：刘刚
 *	版本：1.0
 *	编写日期：2015年5月28日
 */
 
 
 
$(function(){
	
	//首页导航js
	$(".classify_list li").hover(function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(this).find(".r_triangle").show().siblings().find(".r_triangle").hide();
		$(this).find(".classify_child_list").show().siblings().find(".classify_child_list").hide();	
	
	},function(){
		$(this).find(".r_triangle").hide();
		$(this).find(".classify_child_list").hide()	;
		$(this).removeClass("current");
	})
	
})