var arr = ["a","e", "i", "o", "u"];

function vogal() {
    let letra = String(prompt("qual a sua letra?"));
    if (arr.includes(letra.toLowerCase())) {
        alert("vogal");
    } else {
        alert("nao vogal");
    }
}

console.log(vogal());