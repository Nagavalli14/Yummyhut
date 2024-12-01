function sendOTP() {
    const phoneNumber = document.getElementById("phoneNumber").value;
    if (!phoneNumber.match(/^[0-9]{10}$/)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Simulate OTP sending
    alert("OTP sent to " + phoneNumber);
    document.getElementById("otp").disabled = false;
}

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const otp = document.getElementById("otp").value;

    if (username && password && otp) {
        // Simulate login validation
        alert("Login successful! Redirecting to YummyHut...");
        window.location.href = "index.html"; // Redirect to the main page
    } else {
        alert("Please complete all fields.");
    }
}
