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
    document.getElementById("span").innerHTML = im1;
    var v = 1;

    $('body').on ('load', function () {
        loadImage ();
    });

    function loadImage () {
        if (document.getElementById("span") == null) return;
        if (v > 6) v = 0;
        if (v == 0) document.getElementById("span").innerHTML = im1;
        if (v == 1) document.getElementById("span").innerHTML = im2;
        if (v == 2) document.getElementById("span").innerHTML = im3;
        if (v == 3) document.getElementById("span").innerHTML = im4;
        if (v == 4) document.getElementById("span").innerHTML = im5;
        if (v == 5) document.getElementById("span").innerHTML = im6;
        v++;
    }
    setInterval(loadImage, 5000);
});