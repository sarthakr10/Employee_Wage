const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validatePinCode(pinCode) {
    const pinCodeRegex = /^[1-9][0-9]{6}$/; // Ensures only valid 6-digit PIN codes
    return pinCodeRegex.test(pinCode);
}

rl.question("Enter a 6-digit PIN Code: ", (pinCode) => {
    if (validatePinCode(pinCode)) {
        console.log("✅ Valid PIN Code!");
    } else {
        console.log("❌ Invalid PIN Code! It must be a 6-digit number starting from 1-9.");
    }
    rl.close();
});