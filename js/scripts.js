$(document).ready(function() {
  $("#quiz-form").submit(function(event) {
    event.preventDefault();
    // VARIABLES TO HOLD USER INPUT
    let nameInput = $("#name").val();
    let projectTypeInput = $("#project-type").val();
    let salaryInput = $("#salary").val();
    let cityInput = $("input:radio[name=city]:checked").val();
    let employerTypeInput =  $("input:radio[name=employer]:checked").val();
    let spiritAnimalInput = $("#spirit-animal").val();

    // FUNCTIONS TO SHOW RESULTS
    let showCSharp = function() {
      $(".c-sharp").show();
      $(".python").hide();
      $(".ruby").hide();
    };
    let showRuby = function() {
      $(".ruby").show();
      $(".python").hide();
      $(".c-sharp").hide();
    };
    let showPython = function() {
      $(".python").show();
      $(".ruby").hide();
      $(".c-sharp").hide();
    };

    if(projectTypeInput === "windows" && employerTypeInput === "corporate" && spiritAnimalInput === "owl") {
      showCSharp();
    } else if(projectTypeInput === "arduino-pi" && employerTypeInput === "startup" && spiritAnimalInput === "unicorn") {
      showRuby();
    } else if(projectTypeInput === "machine-ai" && cityInput === "new-york" && salaryInput === "salary-very-important") {
      showPython();
    } else if(projectTypeInput === "windows" && cityInput === "seattle" && salaryInput === "salary-not-important") {
      showCSharp();
    } else if(salaryInput === "salary-med-important" && cityInput === "new-york" employerTypeInput === "startup") {
      showRuby();
    } else {
      showPython();
    }

    $(".name-here").text(nameInput);

  });
});

//start 6:32   end: 