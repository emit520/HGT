/*!	文档说明：
 *	说明：首页js
 *	作者：刘刚
 *	版本：1.0
 *	编写日期：2015年5月22日
 */

$(function(){
	
	//导航显示js
	$(".classify_head").click(function(){
		var up = $(this).find("span").hasClass("up");
		if(up){
			$(this).find("span").removeClass("up").addClass("down");
			$(".classify_box").show();	
		}else{
			$(this).find("span").removeClass("down").addClass("up");
			$(".classify_box").hide();	
		}
	})
	
	//热销单品滚动js
	$(function(){
		// 滑动特效初始化
		var page = 1;
		var i = 4; //
		var $v_content = $(".hot_sale_single_box");  //找到图片容器外面的div
		var $v_show =$(this).find(".hot_sale_single_list ul"); //找到图片列表的容器，这里是ul
		var v_width = $v_content.width();  //获取div的宽度
		var len = $v_show.find("li").length;  //获取列表的个数
		var page_count = Math.ceil(len / i) ;  //获取列表的页数
		
		var init = function(){
			var scrtime;
			$(".hot_sale_single").hover(function(){
				clearInterval(scrtime);  //鼠标以上去时停止滚动
			},function(){
			scrtime = setInterval(function(){
				
				if(len%i == 0){//当每页都排满时
					if( page == page_count ){    //已经到最后一个版面了,如果再向前，必须跳转到第一个版面。
						$v_show.animate({ 'left' : '0px'}, "slow");
						page = 1;
					}else{    //否则向后翻页
						$v_show.animate({ 'left' : '-='+v_width }, "slow");  
						page++;
					}	
				}else{//当最后一页不足页时
					if( page == page_count-1 ){    //跳到最后一页时只移动不足一页的长度
						var num = len%i;
						$v_show.animate({ 'left' : -((page-1)*v_width+num*230)}, "slow");
						page++;
					}else if(page == page_count){ //已经到最后一个版面了,如果再向前，必须跳转到第一个版面。
						$v_show.animate({ 'left' : '0px'}, "slow");
						page = 1;
					}else{    //否则向后翻页
						$v_show.animate({ 'left' : '-='+v_width }, "slow");  
						page++;
				 };	
				}; 
					
			},5000);  //设置滚动时间 这里是毫秒
			
			}).trigger("mouseleave");  //鼠标离开恢复滚动	
		};
		init();
		
		//向后 按钮
		$(this).find(".next").click(function(){    //绑定click事件
			if(len%i == 0){//当每页都排满时
				if( page == page_count ){    //已经到最后一个版面了,如果再向前，必须跳转到第一个版面。
					$v_show.animate({ 'left' : '0px'}, "slow");
					page = 1;
				}else{    //否则向后翻页
					$v_show.animate({ 'left' : '-='+v_width }, "slow");  
					page++;
				}	
			}else{//当最后一页不足页时
				if( page == page_count-1 ){    //跳到最后一页时只移动不足一页的长度
					var num = len%i;
					$v_show.animate({ 'left' : -((page-1)*v_width+num*230)}, "slow");
					page++;
				}else if(page == page_count){ //已经到最后一个版面了,如果再向前，必须跳转到第一个版面。
					$v_show.animate({ 'left' : '0px'}, "slow");
					page = 1;
				}else{    //否则向后翻页
					$v_show.animate({ 'left' : '-='+v_width }, "slow");  
					page++;
			 };	
			}; 
	   });
		//往前 按钮
		$(this).find(".prev").click(function(){
			
			if(len%i == 0){ //当每页都排满时
				if( page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
					$v_show.animate({ 'left' : '-='+(v_width)*(page_count-1) }, "slow");
					page = page_count;
				}else{   //否则向前翻页
						$v_show.animate({ 'left' : '+='+v_width}, "slow");
						page--;
				};
			}else{  //当最后一页不足页时
				if(page == 1){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
					var num = len%i;
					$v_show.animate({ 'left' : -(v_width*(page_count-2)+num*230) }, "slow");
					page = page_count;
				}else if(page == 2){ //跳到第一页时只移动不足一页的长度
					var num = len%i;
					$v_show.animate({ 'left' : '0px' }, "slow");
					page=1;
				}else{ //否则向前翻页
					$v_show.animate({ 'left' : '+='+v_width}, "slow");
					page--;
				};
			}; 
		});
	});
	
	//侧边分类js
	$(".sub_classify_tit").click(function(){
		$(this).parent().find(".sub_classify_list").show().parents("li").siblings().find(".sub_classify_list").hide();console.log($(this).find("span").html())
		$(this).find("span").html("-").parents("li").siblings().find("span").html("+");	
	})
	
	//选择地区js
	$(".area .place").click(function(){
		$(".area_list").fadeIn();	
	})
	$(".province li").click(function(){
		$(this).addClass("province_select").siblings().removeClass("province_select");	
	});
	$(".city li").click(function(){
		$(this).addClass("city_select").siblings().removeClass("city_select");	
	});
	$(".area_reset").click(function(){
		$(".area_list").fadeOut();	
	});
	$(".area_submit").click(function(){
		var txt1 = $(".province li.province_select").html();
		var txt2 = $(".city li.city_select").html();
		$(".place em").html(txt1 + txt2);
		$(".area_list").fadeOut();
	});
	
	//个人购卡，企业购卡面值选择
	$(".card_value").each(function(index) {
        $(this).find("a").click(function(){
			$(this).addClass("card_select").siblings().removeClass("card_select");
		});
		$(this).find("input").focus(function(){
			$(this).parent().find("a").removeClass("card_select");
			var val = $(this).val();
			if(val == "其他面值" || val == ""){
				$(this).val('');
			}else{
				$(this).val(val);
			}	
		});
		$(this).find("input").blur(function(){
			var val = $(this).val();
			if(val == "其他面值" || val == ""){
				$(this).val('其他面值');
			}else{
				$(this).val(val);
			}	
		});
    });
	
	//登陆输入框
	$(".login_pw").keyup(function(){
		var val = $(".login_pw").val();
		var len = val.length;
		if(len == 0){
			$(".close1").hide();
		}else if(len >0){
			$(".close1").show();
		}
		
	});
	$(".close1").click(function(){
		var val = $(".login_pw").val();
		var len = val.length;
		if(len==1){
			$(".close1").hide();
		}
		if(val == '' || val == null){
			$(".login_pw").val('');	
		}else{
			var str = val.substring(0,len-1);
			$(".login_pw").val(str);		
		}	
	});
	
	//支付方式选择
	$(".pay_item_list li").click(function(){
		$(this).find("i").addClass("radio_select").parent("li").siblings().find("i").removeClass("radio_select");
		$(this).parents(".pay_item").siblings().find("i").removeClass("radio_select");	
	})
    
		
	

})