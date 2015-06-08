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
	
	//注册tab
	Tab(".registe_tab li",".registe_item","registe_tab_select");
	
	//选择商品数量加减控件
	function plusAndMinus(){
		$(".count_num").each(function(index, element) {
            $(this).find(".minus").click(function(){
				var val = $(this).parent().find(".choose_num").val();
				if(val <= 0){
					$(this).parent().find(".choose_num").val(0)	
				}else{
					$(this).parent().find(".choose_num").val(parseInt(val)-1);
				}
			});
			$(this).find(".plus").click(function(){
				var val = $(this).parent().find(".choose_num").val();
				$(this).parent().find(".choose_num").val(parseInt(val)+1);
			})
        });
		
	}
	plusAndMinus();

	//产品详情选择商品颜色，规格等js
	$(".choose_color li").click(function(){
		$(this).addClass("choose_select").siblings().removeClass("choose_select");	
	});
})