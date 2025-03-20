const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateEmail(email) {
    const emailRegex = /^abc[a-zA-Z0-9._%+-]*@bridgelabz\.co(\.[a-z]{2})?$/;
    return emailRegex.test(email);
}

rl.question("Enter an email to validate: ", (email) => {
    if (validateEmail(email)) {
        console.log("✅ Valid Email!");
    } else {
        console.log("❌ Invalid Email! Format should be 'abc.xyz@bridgelabz.co.in'.");
    }
    rl.close();
});