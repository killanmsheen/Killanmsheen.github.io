$(document).ready(function(){
    $(".box").on("click", "li", function(){
        var tabsID = $(this).attr("id");
        $(this).addClass("active").siblings().removeClass("active");
        $("#" + tabsID + "-content-box").addClass("active").siblings().removeClass("active");
    })
})