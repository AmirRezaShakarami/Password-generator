const letters = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")",
"_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const numbers = [ "0", "1", "2", "3", "4", "5",
"6", "7", "8", "9"]

const passEl = document.getElementsByClassName("pass-el")
var numbersCheck = document.getElementById("numbers-check")
var symbolsCheck = document.getElementById("symbols-check")

var slider = document.getElementById("length-slider");
var sliderOutput = document.getElementById("length-counter");

//show value of slider range (length of password)
sliderOutput.textContent += slider.value;
slider.oninput = function () {
    sliderOutput.textContent = this.value;
}


//run password generator
function generate() {
    passEl[0].textContent = random() 
    passEl[1].textContent = random()
}
//give random password from defined characters
function random() {
    let randomPass = ""
    if (numbersCheck.checked === false && symbolsCheck.checked === false){
        for (let i = 0; i < slider.value; i++) {
            randomPass += letters[Math.floor(Math.random() * letters.length)]
        }
    }else if (numbersCheck.checked === true && symbolsCheck.checked === false){
        var lettersAndNumbers = letters.concat(numbers)
        for (let i = 0; i < slider.value; i++) {
            randomPass += lettersAndNumbers[Math.floor(Math.random() * lettersAndNumbers.length)]
        }
    }else if (numbersCheck.checked === false && symbolsCheck.checked === true){
        var lettersAndSymbols = letters.concat(symbols)
        for (let i = 0; i < slider.value; i++) {
            randomPass += lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)]
        }
    }
    else {
        var lettersAndNumbersAndsymbols = letters.concat(numbers, symbols)
        for (let i = 0; i < slider.value; i++) {
            randomPass += lettersAndNumbersAndsymbols[Math.floor(Math.random() * lettersAndNumbersAndsymbols.length)]
        }
    }
        
    return randomPass
}
//to coppy generated passwords
document.getElementById("pass1").addEventListener("click", function(){

    navigator.clipboard.writeText(passEl[0].textContent)
    passEl[0].textContent = "Copied !"
})
document.getElementById("pass2").addEventListener("click", function(){
    
    navigator.clipboard.writeText(passEl[1].textContent)
    passEl[1].textContent = "Copied !"
})


