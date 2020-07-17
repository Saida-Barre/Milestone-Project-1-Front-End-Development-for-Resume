//wired up form using formData object and added eventListener
const form = document.querySelector("form");

form.addEventListener("submit", submit);
function submit (event) { 
    //event.preventDefault();
    let formData = new FormData(form);
    console.log(form);
    console.log(formData.get("yourEmail"));
    console.log(formData.get("messageSubject"));
    console.log(formData.get("message"));
}

//now that the input variables and button works in form, we need to populate this info into mailto email.

