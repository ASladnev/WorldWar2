/**
 * Created by 805159 on 19.05.2015.
 */
var images = [
    "<img src='Berlin/im2.jpg' width='300px' height='200px'/>",
    "<img src='Berlin/img1.jpg' width='300px' height='200px'/>",
    "<img src='Berlin/img3.jpg' width='300px' height='200px'/>",
    "<img src='Berlin/img4.jpg' width='300px' height='200px'/>",
    "<img src='Berlin/img5.jpg' width='300px' height='200px'/>",
    "<img src='Berlin/img6.jpg' width='300px' height='200px'/>"
];

    document.getElementById("Ber").innerHTML = images[5];
    var v = 0;
    function ChangeImg () {
        if (v > images.length - 1) v = 0;
        var image = document.getElementById("Ber");
        if (image == null) {
            clearInterval(interval);
            return;
        }
        image.innerHTML = images[v++];
    }
    ChangeImg();
    var interval = setInterval(ChangeImg, 5000);


$("#Berlin").on ('click', function () {
    $('#moscowModal').modal ('toggle');
});

var carousel = $('.carousel');
carousel.carousel({'interval': false});
$('.left').on ('click', function () {carousel.carousel ('prev')});
$('.right').on ('click', function () {carousel.carousel ('next')});
