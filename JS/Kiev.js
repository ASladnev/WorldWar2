/**
 * Created by 805159 on 12.05.2015.
 */
var images = [
    "<img src='Kiev/kiev1.jpg' width='300px' height='280px'/>",
    "<img src='Kiev/kiev2.jpg' width='300px' height='280px'/>",
    "<img src='Kiev/kiev3.jpg' width='300px' height='280px'/>",
    "<img src='Kiev/kiev4.jpg' width='300px' height='280px'/>",
    "<img src='Kiev/kiev5.jpg' width='300px' height='280px'/>",
    "<img src='Kiev/kiev6.jpg' width='300px' height='280px'/>"];
var v = 0;
function ChangeImage () {
    if (v > images.length - 1) v = 0;
    var ImageBlock = document.getElementById("ImageHero");
    if (ImageBlock == null) {
        clearInterval(interval);
        return;
    }
    ImageBlock.innerHTML = images[v++];
}
ChangeImage();
var interval = setInterval(ChangeImage, 5000);


$("#Kiev").on ('click', function () {
    $('#moscowModal').modal ('toggle');
});

var carousel = $('.carousel');
carousel.carousel({'interval': false});
$('.left').on ('click', function () {carousel.carousel ('prev')});
$('.right').on ('click', function () {carousel.carousel ('next')});
