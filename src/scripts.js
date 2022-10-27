$(document).ready(function () {
    $(window).scroll(function () {
        console.log(document.documentElement.scrollTop);
        if (document.documentElement.scrollTop > 20) {
            $(".back-to-top").addClass("animate__animated animate__backInDown");
            $(".back-to-top").show();
        } else {
            $(".back-to-top").removeClass("animate__animated animate__backInDown");
            $(".back-to-top").hide();
        }
    })
    $(".back-to-top").click(function () {
        function setT() {
            if (document.documentElement.scrollTop > 0) {
                document.documentElement.scrollTop -= 100;
            }
        }

        let blockSet = setInterval(setT, 10);
        setTimeout(function () {
            clearInterval(blockSet);
        }, 600)
    })
    show();
    function show() {
        var slideIndex = 1;
        showSlides(slideIndex);
        slideShow(slideIndex - 1);
        $(".dot-right").click(function () {
            showSlides(slideIndex += 1);
        })
        $(".dot-left").click(function () {
            showSlides(slideIndex += -1);
        })

        function showSlides(n) {
            slide(n);
        }

        function slideShow() {
            slide(slideIndex)
            slideIndex++;
            setTimeout(slideShow, 2000);
        }

        function slide(n) {
            var i;
            var slides = $(".p9");
            var dots = $(".dot-child    ");
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    }
    convert();
    function convert() {
        var desc_word = $(".desc_word");
        var request = $(".request");
        var treatment = $(".treatment");
        var content_desc_word = $(".content-desc");
        var content_request = $(".content-request");
        var content_treatment = $(".content-treatment");
        desc_word.click(function () {
            desc_word.addClass(" active");
            request.removeClass(" active");
            treatment.removeClass(" active");
            content_desc_word.addClass(" active");
            content_request.removeClass(" active");
            content_treatment.removeClass(" active");
            content_desc_word.show();
            content_request.hide();
            content_treatment.hide();
        })
        request.click(function () {
            desc_word.removeClass(" active");
            request.addClass(" active");
            treatment.removeClass(" active");
            content_desc_word.removeClass(" active");
            content_request.addClass(" active");
            content_treatment.removeClass(" active");
            content_desc_word.hide();
            content_request.show();
            content_treatment.hide();
        })
        treatment.click(function () {
            desc_word.removeClass(" active");
            request.removeClass(" active");
            treatment.addClass(" active");
            content_desc_word.removeClass(" active");
            content_request.removeClass(" active");
            content_treatment.addClass(" active");
            content_desc_word.hide();
            content_request.hide();
            content_treatment.show();
        })
    }
    $(".container__toggle").click(function (){
       $(".container__menu").slideToggle();
    })


});

