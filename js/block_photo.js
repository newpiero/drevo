$(document).ready(function () {
    $(".more_photo_a").click(function () {
        $(".other_photo").toggle(300);
        return false
    })
});
$(document).ready(function () {
    $(".more_photo_a").click(function () {
        $(".more_photo_a").fadeOut();
        return false
    })
});
$(document).ready(function () {
    $(".more_photo_a").click(function () {
        $(".more_photo").css("height", "0px");
        return false
    })
});