/**
 * Created by 805159 on 12.05.2015.
 */
var images = [
    "<img src='Sevastopol/sevastopol1.jpg' width='300px' height='280px'/>",
    "<img src='Sevastopol/sevastopol2.jpg' width='300px' height='280px'/>",
    "<img src='Sevastopol/sevastopol3.jpg' width='300px' height='280px'/>",
    "<img src='Sevastopol/sevastopol4.jpg' width='300px' height='280px'/>",
    "<img src='Sevastopol/sevastopol5.jpg' width='300px' height='280px'/>",
    "<img src='Sevastopol/sevastopol6.jpg' width='300px' height='280px'/>"];
var v = 0;
function ChangeImage () {
    if (v > 5) v = 0;
    var ImageBlock = document.getElementById("ImageHero");
    if (ImageBlock == null) {
        clearInterval(interval);
        return;
    }
    ImageBlock.innerHTML = images[v++];
}
ChangeImage();
var interval = setInterval(ChangeImage, 5000);

$("#Sevastopol").on ('click', function () {
    $('#moscowModal').modal ('toggle');
});

var carousel = $('.carousel');
carousel.carousel({'interval': false});
$('.left').on ('click', function () {carousel.carousel ('prev')});
$('.right').on ('click', function () {carousel.carousel ('next')});
