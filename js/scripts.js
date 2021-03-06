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
      $(".c-sharp").fadeIn();
      $(".python").hide();
      $(".ruby").hide();
    };
    let showRuby = function() {
      $(".ruby").fadeIn();
      $(".python").hide();
      $(".c-sharp").hide();
    };
    let showPython = function() {
      $(".python").fadeIn();
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
    } else if(salaryInput === "salary-med-important" && cityInput === "new-york" &&employerTypeInput === "startup") {
      showRuby();
    } else if(projectTypeInput === "windows" && cityInput === "seattle" && employerTypeInput === "startup") {
      showCSharp();
    } else if(projectTypeInput === "arduino-pi" && cityInput === "seattle" && spiritAnimalInput === "owl") {
      showRuby();
    } else {
      showPython();
    }

    $(".name-here").text(nameInput);

  });
});


// 3 hours 15 minutes left 

// start 11:25  end  12:08
// start  2:55  end