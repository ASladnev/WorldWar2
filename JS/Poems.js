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

 });

