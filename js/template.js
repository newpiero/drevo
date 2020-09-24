(function (a) {
    a(function () {
        // a(".open-more").on("click", function () {
        //     a(".open-close-block").slideToggle()
        // });
        a('.open-more').click(function(){
            a('.open-close-block').show();
            a('.open-close-block').addClass('dsppp');

        });

        var i = {
            data: {}, set: function (p, o) {
                this.data[p] = o
            }, get: function (p, o) {
                return this.data[p]
            }, merge: function (p, o) {
                return a.extend({}, this.data[p], o)
            }
        };
        i.set("fancybox", {
            openEffect: "none",
            slidesToScroll: 3,
            nextEffect: "none",
            prevEffect: "none",
            closeSpeed: 0,
            margin: [25, 25, 10, 25],
            padding: 5,
            maxWidth: 1170,
            helpers: {thumbs: {width: 70, height: 70}, overlay: {locked: !1}},
            tpl: {
                closeBtn: '<a title="Закрыть" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Далее" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Назад" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            }
        });
        Number.prototype.pad = function (o) {
            var p = String(this);
            while (p.length < (o || 2)) {
                p = "0" + p
            }
            return p
        };

        function m(o, p) {
            return o.$slider.data("caption") + " " + p.pad()
        }

        function g() {
            var o = a(this.$slides[this.currentSlide]).find(".js-lazyYT");
            o.removeClass("lazyYT-video-loaded").html('<div class="ytp-thumbnail lazyYT-image-loaded"><div class="ytp-large-play-button"></div></div>')
        }

        a("img.lazyimg").lazyload({effect: "fadeIn"});
        a(".price__title").matchHeight();
        a(".price__list").matchHeight();
        a(".no-js").toggleClass("js no-js");
        a(".js-mask-phone").mask("+7 (999) 999-99-99");
        a(".js-nav-toggle").on("click", function () {
            a(".js-nav-toggle").toggleClass("active", !0).next().slideToggle()
        });
        a(window).resize(function () {
            if (document.documentElement.clientWidth < 768) {
                a(document).mouseup(function (o) {
                    var p = a(".js-nav-toggle");
                    if (!p.is(o.target) && p.has(o.target).length === 0) {
                        a(".js-nav-toggle").toggleClass("active", !0).next().slideUp()
                    }
                })
            }
        });
        a(".js-lazyYT").lazyYT();
        a(".head").stickThis();
        a(window).on("scroll", function () {
            if (a(window).scrollTop() > 0) {
                a(".head").addClass("sticky")
            } else {
                a(".head").removeClass("sticky")
            }
        });
        var f = a("html, body");
        a('.nav_head a[href^="#"]').click(function () {
            var o = a.attr(this, "href");
            a(".js-nav-toggle").removeClass("active");
            if (o == "#s-blog") {
                var p = a(o).find(".container")
            } else {
                var p = a(o).find(".section__title")
            }
            if (!p.length) {
                p = a(o)
            }
            f.animate({scrollTop: p.offset().top - 120}, 500, function () {
            });
            a(this).addClass("active");
            return !1
        });
        document.onclick = function () {
            a(".nav_head a").removeClass("active")
        };
        a(".js-fancy-close").on("click", function (o) {
            o.preventDefault();
            a.fancybox.close()
        });
        a(".fancy").fancybox(i.get("fancybox"));
        a('a[href="#form-callback"]').fancybox(i.merge("fancybox", {
            padding: 0, tpl: {closeBtn: ""}, beforeClose: function () {
                var o = a(this.content);
                if (o.hasClass("form_send")) {
                    a(this.content).find(".form__fieldset").toggle()
                }
                o.removeClass("form_send").trigger("reset")
            }
        }));
        a('.fancy-img, .fancy-video, a[href*="#policy"]').fancybox(i.merge("fancybox", {
            beforeShow: function () {
                var p = [], o = [];
                a.each(this.group, function (q, r) {
                    if (p.indexOf(r.href) < 0) {
                        o.push(r)
                    }
                    p.push(r.href)
                });
                this.group = o
            }
        }));
        var l = a(".welcome__slider");
        l.on("init", function (p, o) {
            o.$count = a(".welcome__caption");
            o.$count.text(m(o, 1))
        });
        l.on("beforeChange", function (q, o, r, p) {
            o.$count.text(m(o, ++p))
        });
        l.slick({
            arrows: !0,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: !0,
            dots: !1,
            prevArrow: ".welcome__nav_prev",
            nextArrow: ".welcome__nav_next"
        });
        var c = a(".welcome__slider-second");
        c.on("init", function (p, o) {
            o.$count = a(".welcome__caption-second");
            o.$count.text(m(o, 1))
        });
        c.on("beforeChange", function (q, o, r, p) {
            o.$count.text(m(o, ++p))
        });
        c.slick({
            arrows: !0,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: !0,
            dots: !1,
            prevArrow: ".welcomeSecond__nav_prev",
            nextArrow: ".welcomeSecond__nav_next"
        });
        var h = a(".welcome__slider-paket");
        h.on("init", function (p, o) {
            o.$count = a(".welcome__caption-paket");
            o.$count.text(m(o, 1))
        });
        h.on("beforeChange", function (q, o, r, p) {
            o.$count.text(m(o, ++p))
        });
        h.slick({
            arrows: !0,
            slidesToShow: 3,
            infinite: !0,
            speed: 300,
            autoplay: !0,
            dots: !1,
            prevArrow: ".welcomePaket__nav_prev",
            nextArrow: ".welcomePaket__nav_next",
            responsive: [{breakpoint: 1024, settings: {slidesToShow: 3, slidesToScroll: 1}}, {
                breakpoint: 720,
                settings: {slidesToShow: 2, slidesToScroll: 1}
            }, {breakpoint: 544, settings: {slidesToShow: 1, slidesToScroll: 1}}]
        });
        var n = a(".reviews");
        n.on("init", function (p, o) {
            o.removeYT = g
        });
        n.on("beforeChange", function (q, o, r, p) {
            o.removeYT()
        });
        n.slick({
            arrows: !0,
            slidesToShow: 1,
            prevArrow: '<div class="reviews__nav reviews__nav_prev"></div>',
            nextArrow: '<div class="reviews__nav reviews__nav_next"></div>'
        });
        a(".reviews__nav").load("/img/icons/arrow.svg");
        a(".blog__photos").slick({arrows: !1, slidesToShow: 1, dots: !1, fade: !0, asNavFor: ".blog__carousel"});
        a(".blog__carousel").slick({
            arrows: !0,
            slidesToShow: 1,
            dots: !1,
            asNavFor: ".blog__photos",
            prevArrow: ".blog__nav_prev",
            nextArrow: ".blog__nav_next"
        });
        a(".blog__nav").load("/img/icons/arrow.svg");
        a("body").on("focus", ".field-error", function () {
            a(this).removeClass("field-error")
        });
        var e;
        a("a[data-form]").on("click", function () {
            e = a(this).attr("data-form")
        });
        a(".form_callback").on("submit", function () {
            var o = a(this);
            var q = !1;
            o.find(".required-field").each(function () {
                if (!this.value.trim()) {
                    q = !0;
                    a(this).addClass("field-error")
                }
            });
            if (!q) {
                var p = o.serializeArray();
                p.push({name: "form", value: e});
                a.post("/mail/callback.php", p);
                o.addClass("form_send").find(".form__fieldset").toggle();
                ym("56569750", "reachGoal", "form_send");
                ga("send", "event", "celi", "zayavka_otpravlena")
            }
            return !1
        });
        a(".form_callback_calc").on("submit", function () {
            var o = a(this);
            var q = !1;
            o.find(".required-field").each(function () {
                if (!this.value.trim()) {
                    q = !0;
                    a(this).addClass("field-error")
                }
            });
            if (!q) {
                var p = o.serializeArray();
                p.push({name: "form", value: e});
                a.post("/mail/callback_calc.php", p);
                o.addClass("form_send").find(".form__fieldset__calc").toggle();
                ym("56569750", "reachGoal", "form_send_calc")
            }
            return !1
        });
        var b = a(".schedule__list");
        var j = new Date;
        j.setUTCHours(j.getUTCHours() + 3);
        b.find("li span").each(function () {
            var p = a(this);
            var u = p.text().split("-");
            var s = d(u[0]);
            var q = d(u[1]);
            var o = new Date;
            o.setUTCHours(s[0], s[1]);
            var t = new Date;
            t.setUTCHours(q[0], q[1]);
            if (o <= j && t >= j) {
                var r = p.parent();
                r.addClass("active");
                return !0
            }
        }).promise().done(function () {
            if (!b.find("li.active").length) {
                var o = b.find("li:last");
                o.addClass("active")
            }
        });

        function d(o) {
            return o.split(":").map(k)
        }

        function k(o) {
            return parseInt(o.trim())
        }

        a(window).trigger("resize").trigger("scroll")
    })
})(jQuery)