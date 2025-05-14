// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    // Add your login logic here (e.g., authentication)
    alert('Login Successful!');
});

// Handle registration form submission
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    // Add your registration logic here (e.g., storing user data)
    alert('Registration Successful!');
});

// Progress Tracker - Increase completed activities
document.getElementById('increaseProgress')?.addEventListener('click', function () {
    let completedActivities = document.getElementById('completedActivities');
    completedActivities.textContent = parseInt(completedActivities.textContent) + 1;
});

// Handle resource form submission
document.getElementById('resourceForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    let resourceInput = document.getElementById('resourceInput').value;
    let newResource = document.createElement('li');
    newResource.textContent = resourceInput;
    document.querySelector('#resources ul').appendChild(newResource);
    document.getElementById('resourceInput').value = '';
});
