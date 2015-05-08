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

    Change();

    function Change () {
        if (v > 5) v = 0;
        var imageDiv = document.getElementById ("imageDiv");
        if (imageDiv == null) {
            clearInterval(interval);
            return;
        }
        imageDiv.innerHTML = arr[v++];
    }

    var interval = setInterval(Change, 5000);

});
