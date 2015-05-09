/**
 * Created by 805159 on 08.05.2015.
 */
$(function () {
   var arr = [
       "<img src='Kursk/Kursk1.jpg' height='150px' width='220px'/>",
       "<img src='Kursk/Kursk2.jpg' height='150px' width='220px'/>",
       "<img src='Kursk/Kursk3.jpg' height='150px' width='220px'/>",
       "<img src='Kursk/Kursk4.jpg' height='150px' width='220px'/>",
       "<img src='Kursk/Kursk5.jpg' height='150px' width='220px'/>",
       "<img src='Kursk/Kursk6.jpg' height='150px' width='220px'/>"];
 /*
    $('body').on ('load', function () {
       ImageChange();
    });
    var v = 1;
    document.getElementById("ImageBlock").innerHTML = arr[0];
    function ImageChange () {
        if (v > 5) v = 0;
        document.getElementById("ImageBlock").innerHTML = arr[v++];
    }
    setInterval(ImageChange, 5000);
*/


    var v = 0;
    function ChangeImage() {
        if (v > 5) v = 0;
        var ImageBlock = document.getElementById("ImageBlock");
        if (ImageBlock == null) {
            clearInterval(int);
            return;
        }
        ImageBlock.innerHTML = arr[v++];
    }
    ChangeImage();
    var int = setInterval(ChangeImage, 5000);
});
