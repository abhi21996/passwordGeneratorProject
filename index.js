// Function to generate a random character
// function Char_random() {

    // Generate between 97 and 122 (ASCII for lowercase letters)
//     const Numtostr = Math.floor(Math.random() * 26) + 97;
//     return String.fromCharCode(Numtostr);
// }

// console.log(Char_random());

function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
  
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/";
  
    let charset = "";
    if (includeUppercase) charset += uppercase;
    if (includeLowercase) charset += lowercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;
  
    if (charset === "") {
      alert("Please select at least one character type!");
      return;
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    document.getElementById("password-display").value = password;
  }
  
  function copyPassword() {
    const passwordField = document.getElementById("password-display");
    navigator.clipboard.writeText(passwordField.value)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
  }
  