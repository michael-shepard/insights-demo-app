document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('dashboardContainer').style.display = 'flex';
    } else {
        alert('Invalid username or password!');
    }
});

document.getElementById('overviewBtn').addEventListener('click', function() {
    document.getElementById('contentFrame').src = "https://radai.embed-omniapp.co/dashboards/6ca39558?prefersDark=true&theme=vibes";
});

// Add listeners for the other buttons when the iframes are available
document.getElementById('unreadBtn').addEventListener('click', function() {
    // Placeholder for future iframe source
    document.getElementById('contentFrame').src = "";
});

document.getElementById('rvuBtn').addEventListener('click', function() {
    // Placeholder for future iframe source
    document.getElementById('contentFrame').src = "";
});

document.getElementById('customBtn').addEventListener('click', function() {
    // Placeholder for future iframe source
    document.getElementById('contentFrame').src = "";
});
