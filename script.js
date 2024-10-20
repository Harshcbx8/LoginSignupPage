function toggleForm() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const formTitle = document.getElementById('form-title');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        formTitle.textContent = 'Login';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        formTitle.textContent = 'Sign Up';
    }
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email && password) {
        window.location.href = "thankyou.html?type=login";
    } else {
        alert("Please fill in both email and password.");
    }
});

document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
    let isValid = true;

    if (email === "") {
        document.getElementById('signup-email-error').style.display = 'block';
        document.getElementById('signup-email-error').textContent = "Email is required.";
        isValid = false;
    } else {
        document.getElementById('signup-email-error').style.display = 'none';
    }

    if (password === "") {
        document.getElementById('signup-password-error').style.display = 'block';
        document.getElementById('signup-password-error').textContent = "Password is required.";
        isValid = false;
    } else {
        document.getElementById('signup-password-error').style.display = 'none';
    }

    if (isValid) {
        window.location.href = "thankyou.html?type=signup";
    }
});
