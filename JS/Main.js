/**
 * Created by 805159 on 05.05.2015.
 */
$(function () {
    var im1 = "<img src='img/im1.jpg' width='100px' height='100px'/>";
    var im2 = "<img src='img/im2.jpg' width='100px' height='100px'/>";
    var im3 = "<img src='img/im3.jpg' width='100px' height='100px'/>";
    var im4 = "<img src='img/im4.jpg' width='100px' height='100px'/>";
    var im5 = "<img src='img/im5.jpg' width='100px' height='100px'/>";
    var im6 = "<img src='img/im6.jpg' width='100px' height='100px'/>";
    var mass = [im1,im2,im3,im4,im5,im6];

    var v = 1;

    function LoadImage () {
        if (v > 5) v = 0;
        var imageX = document.getElementById("span");
        if (imageX == null) {
            clearInterval(interval);
            return;
        }
        imageX.innerHTML = mass[v++];
    }
    LoadImage();

   var interval =  setInterval(LoadImage, 5000);
});

$("#span").on ('click', function () {
    $('#moscowModal').modal ('toggle');
});

var carousel = $('.carousel');
carousel.carousel({'interval': false});
$('.left').on ('click', function () {carousel.carousel ('prev')});
$('.right').on ('click', function () {carousel.carousel ('next')});