function num(str) {
    return /^-?\d+(?:[.,]\d*?)?$/.test(str)
};

let result = document.querySelector(".result p");
let toplama = document.querySelector(".toplama");
let cixma = document.querySelector(".operators .cixma");
let vurma = document.querySelector(".operators .vurma");
let bolme = document.querySelector(".operators .bolme");
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");




toplama.addEventListener("click", function () {
    let lastResult = parseFloat(num1.value) + parseFloat(num2.value);
    result.innerHTML = lastResult;
    
})

cixma.addEventListener("click", function () {
    let lastResult = parseFloat(num1.value) - parseFloat(num2.value);
    result.innerHTML = lastResult;
})

vurma.addEventListener("click", function () {
    let lastResult = parseFloat(num1.value) * parseFloat(num2.value);
    result.innerHTML = lastResult;
})

bolme.addEventListener("click", function () {
    let lastResult = parseFloat(num1.value) / parseFloat(num2.value);
    if (lastResult == Infinity) {
        result.innerHTML ="";
        alert("Bruh")
        
    }
    else{
        result.innerHTML = lastResult;
    }
})