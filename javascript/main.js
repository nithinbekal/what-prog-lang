
var displayLang = function() {
  var text = $("#code").val();
  var hl = hljs.highlightAuto(text);
  if (hl.language) {
    $("#answer").html("This looks like <span class='language lang1'>" + hl.language + "</span>. ");
    $(".lang1").addClass(hl.language);
    if(hl.second_best) {
      $("#answer").append("<br/>It could also be <span class='language lang2'>" + hl.second_best.language + "</span>, though. I'm not completely sure.");
      $(".lang2").addClass(hl.second_best.language);
    }
  } else {
     $("#answer").html("Sorry, I couldn't recognize this code.");
  }
}

$(document).ready(function() {
  $("#code").change(function() {
    displayLang();
  });
});