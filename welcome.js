// Extract user data from the URL
const params = new URLSearchParams(window.location.search);
const username = params.get("username");
const accountNo = params.get("accountNo");
let balance = parseInt(params.get("amount"), 10);

// Populate the welcome page with user details
document.getElementById("welcomeMessage").textContent = `Welcome, ${username}!`;
document.getElementById("accountNo").textContent = accountNo;
document.getElementById("balance").textContent = balance;

// Withdraw logic
document.getElementById("withdrawBtn").addEventListener("click", () => {
    const withdrawAmount = parseInt(document.getElementById("withdrawAmount").value, 10);
    if (withdrawAmount <= balance) {
        balance -= withdrawAmount;
        document.getElementById("balance").textContent = balance;
        Swal.fire("Success", `You have withdrawn $${withdrawAmount}.`, "success");
    } else {
        Swal.fire("Error", "Insufficient balance!", "error");
    }
});

// Logout logic
function logout() {
    window.location.href = "index.html";
}