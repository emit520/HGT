/**
 * Created by zhangwei on 15/6/13.
 */
$(function(){
    $(".drawback-list li").click(function(e){
        $(".drawback-list li").each(function(){
            $(this).removeClass("drawback-checked");
        });
        $(this).addClass("drawback-checked");

    });
    $(".drawback-cause").click(function(){
        if($(".drawback-cause-list").css("display")=="none"){
            $(".drawback-cause-list").show();
        }else{
            $(".drawback-cause-list").hide();
        }
    });

    $(".drawback-cause-list li").click(function(){
        $(".drawback-cause").text($(this).text());
        $(".drawback-cause-list").hide();
    });

    
	//选择支付方式
	$(".card-payment-li").click(function(){
        $(this).addClass("card-payment-checked").siblings(".card-payment-li").removeClass("card-payment-checked");
    });

	//选择可伴卡支付
    $(".arrow-cursor").click(function(e){
        if($(".arrow-cursor-list").css("display")=="none"){
            $(".arrow-cursor-list").show();
            $(this).removeClass("arrow-down");
            $(this).addClass("arrow-up");
        }else{
            $(".arrow-cursor-list").hide();
            $(this).removeClass("arrow-up");
            $(this).addClass("arrow-down");
        }
		stopEventBubble(e);
    });
	$(document).click(function(){
		$(".arrow-cursor-list").hide();
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

    $(".confirm-order-address-list").click(function(){
        $(".confirm-order-address-list").each(function(){
            $(this).removeClass("address-select");
        });
        $(this).addClass("address-select");
    });

});