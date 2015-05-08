/**
 * Created by 805159 on 05.05.2015.
 */
$(function () {

    /*$(".im").on ('mouseover', function () {
        //   $(".im").css({
        //      width: 200
        //    });
        alert("Hello world");
    });

    $(".im").hover(function () {
        $(this).css ("width", "200px").css("height", "200px");
    });
    */
    var arr = ["<img src='Moscow/Moscow1.jpg' height='150px' width='180px'>",
        "<img src='Moscow/Moscow2.jpg' height='150px' width='180px'>",
        "<img src='Moscow/Moscow3.jpg' height='150px' width='180px'>",
        "<img src='Moscow/Moscow4.jpg' height='150px' width='180px'>",
        "<img src='Moscow/Moscow5.jpg' height='150px' width='180px'>",
        "<img src='Moscow/Moscow6.jpg' height='150px' width='180px'>"];
    document.getElementById("imagex").innerHTML = arr[0];
    var v = 1;
    $('body').on ('load', function () {
       Change();
    });
    function Change () {
        if (v > 5) v = 0;
        document.getElementById("imagex").innerHTML = arr[v];
        //if (v == 0) document.getElementById("image").innerHTML = arr[0];
        //if (v == 1) document.getElementById("image").innerHTML = arr[1];
        //if (v == 2) document.getElementById("image").innerHTML = arr[2];
        //if (v == 3) document.getElementById("image").innerHTML = arr[3];
        //if (v == 4) document.getElementById("image").innerHTML = arr[4];
        //if (v == 5) document.getElementById("image").innerHTML = arr[5];
        v++;
    }
    var x;
    function Num () {
        alert("aa");
    }

    $("#imagex").on ('click', function () {
        Num();
    });

        setInterval(Change, 5000);


});
