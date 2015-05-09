/**
 * Created by 805159 on 05.05.2015.
 */
$(function () {
    console.log ("moscow.js is loaded");

    var arr = ["<img src='Moscow/Moscow1.jpg' height='150px' width='200px'>",
        "<img src='Moscow/Moscow2.jpg' height='150px' width='200px'>",
        "<img src='Moscow/Moscow3.jpg' height='150px' width='200px'>",
        "<img src='Moscow/Moscow4.jpg' height='150px' width='200px'>",
        "<img src='Moscow/Moscow5.jpg' height='150px' width='200px'>",
        "<img src='Moscow/Moscow6.jpg' height='150px' width='200px'>"];

    //document.getElementById("imagexxx").innerHTML = arr[0];

    var v = 0;


    function Change () {
        if (v > 5) v = 0;
        var imageDiv = document.getElementById ("imageDiv");
        if (imageDiv == null) {
            console.log ("has cleared interval");
            clearInterval(interval);
            return;
        }
        imageDiv.innerHTML = arr[v++];
    }
    Change ();
    var interval = setInterval(Change, 5000);

    $('#moscowText').on ('click', function () {
       console.log ("Moscow battle text has been clicked");
       $('#moscowModal').modal ('toggle');
    });

    var carousel = $('.carousel');
    carousel.carousel({'interval': false});
    $('.left').on ('click', function () {carousel.carousel ('next')});
    $('.right').on ('click', function () {carousel.carousel ('prev')});


});
