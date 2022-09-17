$('document').ready(function() {
    const swiper = new Swiper(".myBanner", {
        autoplay: {
            delay:2500
        },
        loop:true,
        pagination: {
            el: ".swiper-pagination",
            clickable:true,
        },
        renderBullet: function (index, className) {
            return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
        }
    })
})