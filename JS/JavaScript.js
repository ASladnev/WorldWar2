 //* Created by 805159 on 04.05.2015.

 $(function () {

    var x;
    console.log ("DOM is ready");
    $("#p2").hide();
    $("#p3").hide();
    var w = 0;
    $("#poemButton").on ('click', function () {
      if (w > 2) w = 0;
      if (w == 0) {
          $("#p1").hide();
          $("#p3").hide();
         // $("#p2").show ();
          $("#p2").slideDown(3000);
      }
      if (w == 1) {
          $("#p2").hide();
          $("#p1").hide();
         // $("#p3").show ();
          $("#p3").slideDown(3000);
      }
      if (w == 2) {
          $("#p2").hide();
          $("#p3").hide();
         // $("#p1").show ();
          $("#p1").slideDown(3000);
      }
      w++;
     });



     var im1 = "<img src='img/im1.jpg' width='470px' height='378px'/>";
     var im2 = "<img src='img/im2.jpg' width='470px' height='378px'/>";
     var im3 = "<img src='img/im3.jpg' width='470px' height='378px'/>";
     var im4 = "<img src='img/im4.jpg' width='470px' height='378px'/>";
     var im5 = "<img src='img/im5.jpg' width='470px' height='378px'/>";
     var im6 = "<img src='img/im6.jpg' width='470px' height='378px'/>";
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
     }/*
      $("#but").on ('click', function () {
      x = parseInt($("#inp").val());
      alert($("#inp").val());
      setInterval(Image, x);
      });
      */

     setInterval(loadImage, 5000);


 });

