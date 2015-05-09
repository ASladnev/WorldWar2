/**
 * Created by 805159 on 07.05.2015.
 */
var con = 200;
var images = ["<img src='Stalingrad/Stalingrad1.jpg' height='150px' width='180px'>",
    "<img src='Stalingrad/Stalingrad2.jpg' height='150px' width='200px'>",
    "<img src='Stalingrad/Stalingrad3.jpg' height='150px' width='200px'>",
    "<img src='Stalingrad/Stalingrad4.jpg' height='150px' width='200px'>",
    "<img src='Stalingrad/Stalingrad5.jpg' height='150px' width='200px'>",
    "<img src='Stalingrad/Stalingrad6.jpg' height='150px' width='200px'>"];
document.getElementById("imageS").innerHTML = images[0];
var x = 1;
function Image () {
    if (x > 5) x = 0;
    document.getElementById("imageS").innerHTML = images[x];
    x++;
}
$('body').on('load', function () {
   Image();
});
setInterval(Image, 5000);