const selectedAll = document.querySelectorAll(".selected");
const select_box = document.querySelectorAll(".select-box");

selectedAll.forEach((selected) => {
  const optionsContainer = selected.previousElementSibling;
  

  const optionsList = optionsContainer.querySelectorAll(".option");

  selected.addEventListener("click", () => {
    if (optionsContainer.classList.contains("active")) {
      optionsContainer.classList.remove("active");
      
    } else {
      let currentActive = document.querySelector(".options-container.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }

      optionsContainer.classList.add("active");
    }
    
  });

  optionsList.forEach((o) => {
    o.addEventListener("click", () => {
      // selected.innerHTML = o.querySelector("label").innerHTML;
      selected.value =o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
      alert("click");

    });
  });
  

  
});


// adapted from https://www.codeply.com/go/mhkMGnGgZo/bootstrap-4-validation-example

$("#bootstrapForm").submit(function(event) {

    // make selected form variable
    var vForm = $(this);
    
  /*
  If not valid prevent form submit
  https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity
  */
    if (vForm[0].checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
     
      // Replace alert with ajax submit here...
      alert("your form is valid and ready to send");
      
    }
    
    // Add bootstrap 4 was-validated classes to trigger validation messages
    vForm.addClass('was-validated');
    
 
});
