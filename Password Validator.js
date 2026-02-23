// You are building a password validation feature.
//  Create a function that checks if a given password meets the following criteria:
//  at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit

function validatePassword(password) {
    // Condition 1: At least 8 characters
    if (password.length < 8) return false;

    // Condition 2: At least one uppercase letter
    let hasUpper = /[A-Z]/.test(password);

    // Condition 3: At least one lowercase letter
    let hasLower = /[a-z]/.test(password);

    // Condition 4: At least one digit
    let hasDigit = /[0-9]/.test(password);

    return hasUpper && hasLower && hasDigit;
}

console.log(validatePassword("Pass1234"));
console.log(validatePassword("password"));
console.log(validatePassword("PASSWORD1")); 
console.log(validatePassword("Pass1"));     
