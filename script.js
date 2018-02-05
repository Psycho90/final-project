$(document).ready(function(){
    svg4everybody();
    $('.news').slick({
        prevArrow:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 588.3 1004.6\" width='15' height='25' role=\"presentation\" class=\"news__arrow news__arrow_left\">\n" +
        "                    <use xlink:href=\"/img/icons/arrow-left.svg#left\"></use>\n" +
        "                </svg>",
        nextArrow:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 1052\" width='15' height='25' role=\"presentation\" class=\"news__arrow news__arrow_right\">\n" +
        "                    <use xlink:href=\"/img/icons/arrow-right.svg#right\"></use>\n" +
        "                </svg>"
    });
});
