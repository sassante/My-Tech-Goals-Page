// Function to update current time in UTC
function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4]; // Extract the time part from UTC string
    document.getElementById('current-time').textContent = utcTime;
}

// Function to update current day of the week
function updateDay() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getUTCDay()]; // Get day of the week in UTC
    document.getElementById('current-day').textContent = day;
}

// Initial call to update time and day
updateTime();
updateDay();

// Update time every second
setInterval(updateTime, 1000);
