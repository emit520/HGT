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
	});
	
	//tab选项卡
	function Tab(elem1,elem2,elem3){
		$(elem1).click(function(){
			var _index = $(this).index();
			$(this).addClass(elem3).siblings().removeClass(elem3);
			$(elem2).eq(_index).show().siblings().hide();	
		});	
	};
	//商品详情tab
	Tab(".product_infor_tab li",".product_infor_disc","tab_select");
	
})