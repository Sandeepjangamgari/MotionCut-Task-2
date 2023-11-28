function validateForm(event) {
    event.preventDefault();

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = document.getElementById('email');
    if (!emailRegex.test(emailInput.value)) {
        alert('Invalid email format');
        return;
    }

    // Basic password strength validation
    const passwordInput = document.getElementById('password');
    if (passwordInput.value.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
    }

    // If all validations pass, you can submit the form or redirect to a confirmation page
    alert('Registration successful!');
    // You might want to submit the form data to a server using AJAX or redirect to a confirmation page.
}
