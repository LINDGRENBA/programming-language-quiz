$(document).ready(function() {
  $("#quiz-form").submit(function(event) {
    event.preventDefault();

    let nameInput = $("#name").val();
    let projectTypeInput = $("#project-type").val();
    let salaryInput = $("#salary").val();
    let cityInput = $("input:radio[name=city]:checked").val();
    let employerTypeInput =  $("input:radio[name=employer]:checked").val();
    let spiritAnimalInput = $("#spirit-animal").val();
    console.log(nameInput);
    console.log(projectTypeInput);
    console.log(salaryInput);
    console.log(cityInput);
    console.log(employerTypeInput);
    console.log(spiritAnimalInput);

  });
});

//start 6:32   end: 