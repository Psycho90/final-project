$(document).ready(function(){
    $('.news').slick({
        prevArrow:"<svg xmlns=\"http://www.w3.org/2000/svg\" role=\"presentation\" class=\"news__arrow news__arrow_left\">\n" +
        "                    <use xlink:href=\"/img/icons/arrow-left.svg#left\"></use>\n" +
        "                </svg>",
        nextArrow:"<svg xmlns=\"http://www.w3.org/2000/svg\" role=\"presentation\" class=\"news__arrow news__arrow_right\">\n" +
        "                    <use xlink:href=\"/img/icons/arrow-right.svg#right\"></use>\n" +
        "                </svg>"
    });
});