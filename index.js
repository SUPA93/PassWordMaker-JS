const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";

const dataUppercase = dataLowercase.toUpperCase();

const dataNumbers = "0123456789";

const dataSymbols = "$^*ù!;:,?&é\"'(-è_çà@=)~#{[|`\^]}/€`";

const rangeValue = document.getElementById("password-length")

function generatePassword() {
    let data = [];
    let password = "";
    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    if (data.length === 0) {
        alert("Please add a choice");
        return;
    }

    for (i = 0; i < rangeValue.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
        console.log(password);
    }

}

generateButton.addEventListener("click", generatePassword);