/**
 * Created by Administrator on 2017/8/9.
 */
$(document).ready(function(){
//    function myfunction(){
//        if($(document).width() < 1000){
//            $(".nav ul").css("display","none");
//            $(".hide-menu").removeClass("displayNone")
//        }
//        else{
//            $(".nav ul").css("display","block");
//            $(".hide-menu").addClass("displayNone")
//        }
//    }
////添加监控页面窗口变化的方法
//    $(window).resize(myfunction);
////并且在页面加载时即调用
//    myfunction();
    $(".head").hover(function(){
        $(".change").removeClass("displayNone")
    },function(){
        $(".change").addClass("displayNone")
    });
    //$(".zoom").click(function () {
    //    if ($(".zoom").hasClass("opene")) {
    //        $(".menu").animate({ margin: "0 0 0 -150px" });
    //        $(".content").animate({ margin: "0 0 0 70px" });
    //        $(".broad").css("margin-left","135px");
    //        $(".broad").html("");
    //        $(".zoom").removeClass("opene");
    //        $(".zoom").addClass("closee");
    //        $(".divide").css("width","525px");
    //    } else {
    //        $(".manuBtn1").html("供应商管理");
    //        $(".manuBtn2").html("产品管理");
    //        $(".manuBtn3").html("采购申请");
    //        $(".manuBtn4").html("订单管理");
    //        $(".manuBtn5").html("发票付款");
    //        $(".manuBtn6").html("数据统计");
    //        $(".manuBtn7").html("企业设置");
    //        $(".menu").animate({ margin: "0 0 0 0px" });
    //        $(".content").animate({ margin: "0 0 0 220px" });
    //        $(".broad").css("margin-left","0");
    //        $(".zoom").addClass("opene");
    //        $(".zoom").removeClass("closee");
    //        $(".divide").css("width","450px");
    //    }
    //});
    $('.manageMenu ul li').mouseenter(function(){
        var nu = $(this).attr("data-id");
        var css = "manuBtn"+nu;
        var sty = "hover"+nu;
        $(this).find('a').removeClass(css);
        $(this).find('a').addClass(sty);
        $(this).find('.target').css("display","block");
    });
    $('.manageMenu ul li').mouseleave(function(){
        var nu = $(this).attr("data-id");
        var css = "manuBtn"+nu;
        var sty = "hover"+nu;
        $(this).find('a').addClass(css);
        $(this).find('a').removeClass(sty);
        $(this).find('.target').css("display","none");
    });
    $('.manageMenu ul li').click(function(){
        var nu = $(this).attr("data-id");
        if($(this).find('.target i').hasClass("subtract")){
            $(this).find('.target').html("<i class='plus'></i>");
            $(".manageMenu ul .conceal[data-id='" + nu + "']").hide(300);
        }else{
            $(".manageMenu ul .conceal").hide(300);
            $('.manageMenu ul li .target').html("<i class='plus'></i>");
            $('.manageMenu ul li').css("background","#3F3F3F");
            $('.manageMenu ul li .target').removeClass("displayBlock");
            $('.manageMenu ul li a').removeClass("active1");
            $('.manageMenu ul li a').removeClass("active2");
            $('.manageMenu ul li a').removeClass("active3");
            $('.manageMenu ul li a').removeClass("active4");
            $('.manageMenu ul li a').removeClass("active5");
            $('.manageMenu ul li a').removeClass("active6");
            $('.manageMenu ul li a').removeClass("active7");
            var sty = "active"+nu;
            $(this).find('a').addClass(sty);
            $(this).css("background","#2B2B2B");
            $(this).find('.target').addClass("displayBlock");
            $(this).find('.target').html("<i class='subtract'></i>");
            $(".manageMenu ul .conceal[data-id='" + nu + "']").show(300);
        }
    });
    $('.manageMenu ul .conceal .subMenu').click(function(){
        $('.manageMenu ul .conceal .subMenu').removeClass("active");
        $(this).addClass("active")
    })
});