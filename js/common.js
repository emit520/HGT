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
	
	//缴水电费tab
	Tab(".water_electricity_tab ul li",".water_electricity_form","water_electricity_tab_current");
	
	//选择商品数量加减控件
	function plusAndMinus(){
		$(".count_num").each(function(index, element) {
            $(this).find(".minus").click(function(){
				var val = $(this).parent().find(".choose_num").val();
				if(val <= 1){
					$(this).parent().find(".choose_num").val(1)	
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
	
	//我的订单全选
	$(function(){
		$(".my_order_tit input[type=checkbox] , .commit_order input[type=checkbox] , my_order_tit input[type=checkbox] ,.check_all input[type=checkbox]").click(function(){
			if($(this).attr("checked") == true){
				$(".my-order input[type=checkbox],.my-cart input[type=checkbox],.personal-information input[type=checkbox]").attr("checked",true);
				
			}else{
				$(".my-order input[type=checkbox],.my-cart input[type=checkbox],.personal-information input[type=checkbox]").removeAttr("checked");
				 
			}
		});
	});
	
	//验证码js
	$(".yan_btn").each(function() {
		var index=$(this);
		var status="true";	
        $(this).click(function(){
			if(status=="true"){ //设置点击状态，避免2次点击
				status="false";
				$(this).css("cursor","default");
				$(this).html("下次发送<span>30</span>秒");
				var num = 30;			
				var timer=function(){						
					if(num>0){
						num--;
						index.find('span').html(num)
					}else{
						index.css("cursor","pointer");
						index.html("获取短信验证码");	
						clearInterval(lg);
						status="true";
					}
				};
				var lg=setInterval(timer,1000);
			}
    	});
	});
})