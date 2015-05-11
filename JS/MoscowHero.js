/**
 * Created by 805159 on 11.05.2015.
 */
var images =[
    "<img src='MoscowHero/moskva1.jpg' width = '400px' height='300px'/>",
    "<img src='MoscowHero/moskva2.jpg' width = '400px' height='300px'/>",
    "<img src='MoscowHero/moskva3.jpg' width = '400px' height='300px'/>",
    "<img src='MoscowHero/moskva4.jpg' width = '400px' height='300px'/>",
    "<img src='MoscowHero/moskva5.jpg' width = '400px' height='300px'/>",
    "<img src='MoscowHero/moskva6.jpg' width = '400px' height='300px'/>"];
    var v = 0;
//document.getElementById("ImageHero").innerHTML = images[0];
    function ChangeImage () {
        if (v > 5) v = 0;
        var DivImage = document.getElementById("ImageHero");
        if (DivImage == null) {
            clearInterval(interval);
            return;
        }
        DivImage.innerHTML = images[v++];
    }
    ChangeImage();
    var interval = setInterval(ChangeImage, 5000);


$("#Moscow").on ('click', function () {
    $('#moscowModal').modal ('toggle');
});

var carousel = $('.carousel');
carousel.carousel({'interval': false});
$('.left').on ('click', function () {carousel.carousel ('prev')});
$('.right').on ('click', function () {carousel.carousel ('next')});