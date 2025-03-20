const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validatePinCode(pinCode) {
    const pinCodeRegex = /^[1-9][0-9]{2}\s\s?[0-9]{3}$/; // Allows optional space in middle
    return pinCodeRegex.test(pinCode);
}

rl.question("Enter a 6-digit PIN Code: ", (pinCode) => {
    if (validatePinCode(pinCode)) {
        console.log("✅ Valid PIN Code!");
    } else {
        console.log("❌ Invalid PIN Code! It must be a 6-digit number (e.g., '400088' or '400 088').");
    }
    rl.close();
});