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

    $(".card-payment-li").click(function(){
        $(".card-payment-li").each(function(){
            $(this).removeClass("card-payment-checked");
        });
        $(this).addClass("card-payment-checked");
    });

    $(".arrow-cursor").click(function(){
        if($(".arrow-cursor-list").css("display")=="none"){
            $(".arrow-cursor-list").show();
            $(this).removeClass("arrow-down");
            $(this).addClass("arrow-up");
        }else{
            $(".arrow-cursor-list").hide();
            $(this).removeClass("arrow-up");
            $(this).addClass("arrow-down");
        }
    });

});