$('document').ready(function() {
    $(".btn_wrap").click(function() {
        $(".drop_menu").slideToggle();
        $(".btn_wrap").toggleClass("on");
    })

    $(".drop_menu .left ul li").click(function() {
        $(".drop_menu .left ul li").removeClass("on");
        $(this).addClass("on");
    })

    $(".content_3 .content .item").mouseenter(function() {
        let i = $(this).index();
        $(".content_3 .content .item .txt").eq(i).slideUp();
        console.log("this"); 
    })
    $(".content_3 .content .item").mouseleave(function() {
        $(".content_3 .content .item .txt").slideDown();  
        console.log("that"); 
    })
})
