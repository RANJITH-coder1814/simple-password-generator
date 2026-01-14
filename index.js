const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getRandomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
}

function generatePassword() {
    let password = "";
    let chars = "";

    if (uppercaseEl.checked) chars += upperLetters;
    if (lowercaseEl.checked) chars += lowerLetters;
    if (numbersEl.checked) chars += numbers;
    if (symbolsEl.checked) chars += symbols;

    if (chars === "") return;

    for (let i = 0; i < lengthEl.value; i++) {
        password += getRandomChar(chars);
    }

    resultEl.innerText = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(resultEl.innerText);
    alert("Password copied!");
});
