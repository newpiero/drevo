$(function() {
    $('.jcarousel').jcarousel({
        list: '.jcarousel-list',
        items: '.jcarousel-item',
        wrap: 'circular'
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
});