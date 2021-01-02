$(function () {
    /* 내비게이션 기능 */
    $("header .menu-list li a").click(function (e) {
        e.preventDefault();

        var $target = $(this.hash);

        $("html, body").animate({
            scrollTop: $target.offset().top
        }, "slow");
    })
});