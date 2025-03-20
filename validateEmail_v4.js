const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateEmail(email) {
    const emailRegex = /^abc([._+-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-z]{2})?$/;
    return emailRegex.test(email);
}

rl.question("Enter an email to validate: ", (email) => {
    if (validateEmail(email)) {
        console.log("✅ Valid Email!");
    } else {
        console.log("❌ Invalid Email! Follow format 'abc.xyz@bridgelabz.co.in'.");
    }
    rl.close();
});