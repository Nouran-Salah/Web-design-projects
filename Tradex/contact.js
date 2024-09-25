var arrowup = document.getElementById('arrowup');

window.addEventListener('scroll', function(e) {
    (this.document.documentElement.scrollTop > 30) ?
        arrowup.style.display = "block" :
        arrowup.style.display = "none";
});

var isvalid = true;

function namecheck(input) {
    var inputValue = input.value.trim();
    if (inputValue.length < 3) {
        input.nextElementSibling.innerText = "Name must be at least 3 letters";
        console.log("Name must be at least 3 letters");
        isvalid = false; // Set isvalid to false if name is invalid
    } else {
        input.nextElementSibling.innerText = '';
        isvalid = true; // Set isvalid to true if name is valid
    }
}

function emailCheck(input) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var inputValue = input.value.trim();
    if (!emailRegex.test(inputValue)) { // If email is invalid
        input.nextElementSibling.innerText = "Enter a valid email";
        isvalid = false; // Set isvalid to false if email is invalid
    } else {
        input.nextElementSibling.innerText = '';
        isvalid = true; // Set isvalid to true if email is valid
    }
}

document.getElementById('myForm').addEventListener('input', function(e) {
    if (e.target.id === 'username') {
        namecheck(e.target);
    }
    if (e.target.id === 'emailAddress') {
        emailCheck(e.target);
    }
});

document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("Form submitted!");

    if (isvalid) { // Check the isvalid flag here
        // Output form data to the console (optional)
        console.log("Name: ", e.target.elements.username.value);
        console.log("Email: ", e.target.elements.emailAddress.value);
        console.log("Subject: ", e.target.elements.subject.value);

        // Display "Message Sent" below the form
        const formContainer = document.getElementById('myForm');
        const successMessage = document.createElement('p');
        successMessage.innerText = "Message Sent Successfully!";
        successMessage.style.color = "red";
        successMessage.style.fontWeight = "bold";

        // Remove existing success message if any
        const existingMessage = formContainer.querySelector('p');
        if (existingMessage) {
            existingMessage.remove();
        }

        formContainer.appendChild(successMessage);

        // Optionally, reset the form
    } else {
        console.log("Form has errors, cannot be submitted.");
    }
});
