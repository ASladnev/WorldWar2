 //* Created by 805159 on 04.05.2015.

 $(function () {

   console.log ("poem.js is loaded");

   $('.war').hide ();

   $("#p1").slideDown (3000);

   var w = 1;
   $("#poemButton").on ('click', function () {
     if (w > 2) w = 0;
     $('.war').hide ();
     if (w == 0) {$('.war').hide(); $("#p1").slideDown(3000); }
     if (w == 1) {$('.war').hide(); $("#p2").slideDown(3000); }
     if (w == 2) {$('.war').hide(); $("#p3").slideDown(3000); }
     w++;
   });

 });

