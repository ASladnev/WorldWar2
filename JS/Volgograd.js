/**
 * Created by 805159 on 12.05.2015.
 */
var images = [
    "<img src='Volgograd/Volgograd2.jpg' width='300px' height='280px'/>",
    "<img src='Volgograd/Volgograd3.jpg' width='300px' height='280px'/>",
    "<img src='Volgograd/Volgograd4.jpg' width='300px' height='280px'/>",
    "<img src='Volgograd/Volgograd5.jpg' width='300px' height='280px'/>",
    "<img src='Volgograd/Volgograd6.jpg' width='300px' height='280px'/>"];
var v = 0;
function ChangeImage () {
    if (v > 6) v = 0;
    var ImageBlock = document.getElementById("ImageHero");
    if (ImageBlock == null) {
        clearInterval(interval);
        return;
    }
    ImageBlock.innerHTML = images[v++];
}
ChangeImage();
var interval = setInterval(ChangeImage, 5000);


$("#Volgograd").on ('click', function () {
    $('#moscowModal').modal ('toggle');
});

var carousel = $('.carousel');
carousel.carousel({'interval': false});
$('.left').on ('click', function () {carousel.carousel ('prev')});
$('.right').on ('click', function () {carousel.carousel ('next')});
