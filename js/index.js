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
		var i = 2; //每版放2个图片
		var $v_show = $(".zhuanti_pic"); //找到图片列表的容器，这里是ul
		var $v_content = $(".zhuanti");  //找到图片容器外面的div
		var v_width = $v_content.width();  //获取div的宽度
		var len = $v_show.find("li").length;  //获取列表的个数
		var page_count = Math.ceil(len / i) ;  //获取列表的页数
		$(".page_count").html(page);         //初始输出第一页页码
		$(".num").html(page_count);       //初始输出页数
		//向后 按钮
		$(".sub_btn_next").click(function(){    //绑定click事件
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
		$(".sub_btn_prev").click(function(){
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
	
	
})