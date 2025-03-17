document.getElementById("signupForm").addEventListener("submit", function(event) {
    let isValid = true;

    // Name validation: Only letters and spaces allowed
    const name = document.getElementById("name").value;
    const nameError = document.getElementById("nameError");
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!nameRegex.test(name)) {
        nameError.textContent = "Name can only contain letters and spaces.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation: Must be in correct format
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation: At least 6 characters, one number, one special character
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be at least 6 characters long, contain one number and one special character.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});
