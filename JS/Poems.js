 //* Created by 805159 on 04.05.2015.

 $(function () {

   console.log ("poem.js is loaded");

   $('.war').hide ();

   $("#p1").show ();

   var w = 1;
   $("#poemButton").on ('click', function () {
     if (w > 2) w = 1;
     $('.war').hide ();
     $("#p" + w++).slideDown (3000);
   });

 });

