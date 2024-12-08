document.addEventListener("DOMContentLoaded", () => {
    const cardSlot = document.getElementById("card-slot");
    const card = document.getElementById("card");
    const pinForm = document.getElementById("pin-form");

    // Array of users
    const users = [
        { username: "Tooba", pin: "1234", accountNo: 1001, amount: 5000 },
        { username: "Zakia", pin: "5678", accountNo: 1002, amount: 10000 },
        { username: "Saima", pin: "9012", accountNo: 1003, amount: 7500 },
        { username: "Iqra", pin: "3456", accountNo: 1004, amount: 3000 },
        { username: "Busha", pin: "7890", accountNo: 1005, amount: 20000 },
        { username: "Sara", pin: "1357", accountNo: 1006, amount: 1500 },
        { username: "Wahid", pin: "2468", accountNo: 1007, amount: 8000 },
        { username: "Ahmed", pin: "3690", accountNo: 1008, amount: 2500 },
        { username: "Rehan", pin: "1122", accountNo: 1009, amount: 9000 },
        { username: "Sana", pin: "3344", accountNo: 1010, amount: 6000 },
    ];

    // Card insertion logic
    cardSlot.addEventListener("click", () => {
        card.classList.add("inserted");
        setTimeout(() => {
            pinForm.style.display = "block";
            cardSlot.style.display = "none";
        }, 500);
    });

    // PIN validation logic
    document.getElementById("submitSignIn").addEventListener("click", () => {
        const enteredPin = document.getElementById("password").value;

        // Check if the PIN matches any user
        const user = users.find((u) => u.pin === enteredPin);

        if (user) {
            Swal.fire({
                title: "Success",
                text: `Welcome, ${user.username}! Redirecting to your account...`,
                icon: "success",
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                // Redirect to the welcome page with user details in the query string
                window.location.href = `welcome.html?username=${encodeURIComponent(user.username)}&accountNo=${user.accountNo}&amount=${user.amount}`;
            });
        } else {
            Swal.fire("Error", "Invalid PIN!", "error");
        }
    });
});
