/*!	文档说明：
 *	说明：首页js
 *	作者：刘刚
 *	版本：1.0
 *	编写日期：2015年5月22日
 */

$(function(){
	
	//商家入驻
	$(function(){
		// 滑动特效初始化
		var page = 1;
		var i = 14; //每版放2个图片
		var $v_show = $(".pinpai_box"); //找到图片列表的容器，这里是ul
		var $v_content = $(".pinpai");  //找到图片容器外面的div
		var v_width = $v_content.width();  //获取div的宽度
		var len = $v_show.find('ul').length;  //获取列表的个数
		var page_count = len ;  //获取列表的页数
		$(".page_count").html(page);         //初始输出第一页页码
		$(".num").html(page_count);       //初始输出页数
		//向后 按钮
		$(".list-next").click(function(){    //绑定click事件
			 if( page == page_count ){    //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
					$v_show.animate({ 'margin-left' : '0px'}, "slow");
					page = 1;
				}else{    //否则向后翻页
					$v_show.animate({ 'margin-left' : '-='+v_width }, "slow");  
					page++;
			 }
			 $(".page_count").html(page);
			 $(".num").html(page_count);
			 
	   });
		//往前 按钮
		$(".list-prev").click(function(){
			 if( page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
					$v_show.animate({ 'margin-left' : '-='+v_width*(page_count-1) }, "slow");
					page = page_count;
			}else{   //否则向前翻页
					$v_show.animate({ 'margin-left' : '+='+v_width }, "slow");
					page--;
			}
			$(".page_count").html(page);
			$(".num").html(page_count);
		});

	});
	
	//首页弹出层
	function Dialog(elem1,elem2){
		$(elem1).click(function(){
			$(".mark").fadeIn();
			$(elem2).fadeIn();
		});
		$(".dia_close").click(function(){
			$(".mark").fadeOut();
			$(elem2).fadeOut();	
		})
	};
	Dialog(".phone_bill","#dialog2");
	Dialog(".oil_car_bill","#dialog1");
	Dialog(".water_bill","#dialog3");
	
	//充话费选择面值
	$(".phone_card a").click(function(){
		$(this).addClass("phone_bill_select").siblings().removeClass("phone_bill_select");	
	});
	
	//充话费号码选择
	$(".phone_input").focus(function(){
		$(".phone_list").fadeIn();	
		
	});
	$(".phone_input").click(function(e){
		stopEventBubble(e);
	})
	$(".phone_list li").click(function(e){
		var val = $(this).html();
		$(".phone_input").val(val);	
		$(".phone_list").fadeOut();
		stopEventBubble(e);
	});
	
	$(".phone_card").click(function(){
		$(".phone_list").fadeOut();	
		
	})
	//选择金额选项卡
	$(".select_face_value").click(function(e){
		$(".face_value_list").fadeIn();	
		stopEventBubble(e);
	})
	$(".face_value_list li").click(function(e){
		var val = $(this).find("input").val();
		$(".select_face_value").html(val);
		$(".face_value_list").fadeOut();	
		stopEventBubble(e);
	})
	$(".oil_card").click(function(){
		$(".face_value_list").fadeOut();	
	})
	//阻止事件冒泡
    function stopEventBubble(event){
        var e=event || window.event;
        if (e && e.stopPropagation){
            e.stopPropagation();    
        }
        else{
            e.cancelBubble=true;
        }
    }
	
	//缴水电费
	$(".public_institution").click(function(e){
		$(".public_institution_list").fadeIn();	
		stopEventBubble(e);
	})
	$(".public_institution_list li").click(function(e){
		var val = $(this).html();
		$(".public_institution").html(val);
		$(".public_institution_list").fadeOut();	
		stopEventBubble(e);
	})
	$(".water_electricity_bill").click(function(){
		$(".public_institution_list").fadeOut();	
	})
	
	//查询与内容切换
	$(".electricity_btn").click(function(){
		$(".inquire").hide();
		$(".bill_disc").show();	
		stopEventBubble(e);
	})
	$(".back_change").click(function(){
		$(".inquire").show();
		$(".bill_disc").hide();	
		stopEventBubble(e);
	})
})