$(document).ready(function () {
    var a = $("#carousel");
    a.owlCarousel()
});
carousel.owlCarousel({items: 1, itemsDesktop: [1400, 1], itemsDesktopSmall: [900, 1], itemsTablet: [600, 1]});
$("#js-prev1").click(function () {
    carousel.trigger("owl.prev");
    return false
});
$("#js-next1").click(function () {
    carousel.trigger("owl.next");
    return false
});
carousel.owlCarousel({singleItem: true});