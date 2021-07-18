const  pwEl  = document.querySelector("#pw")
const copyEl = document.querySelector("#copy")
const lengthEl = document.querySelector("#length")
const upperEl = document.querySelector("#upper")
const lowerEl = document.querySelector("#lower")
const numberEl = document.querySelector("#number")
const symbolEl = document.querySelector("#symbol")
const generateEl = document.querySelector("#generate")
const empty = document.querySelector("#empty")

let error_message = document.querySelector('#error')

const upperLetters = 'ABCDEFGHIKLMNOPQRSTWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstwxyz';
const numbers = '1234567890';
const symbols = '!@#$%^&*()_+=';

function getUppercase(){
    return upperLetters[Math.floor(Math.random()* upperLetters.length)];
}
function getLowercase(){
    return lowerLetters[Math.floor(Math.random()* lowerLetters.length)];
}
function getNumber(){
    return numbers[Math.floor(Math.random()* numbers.length)];

}

function getSymbol(){
    return symbols[Math.floor(Math.random()* symbols.length)];

}

function generatePassword(){

    let length = lengthEl.value;
    let password = '';

    if(length > 100){
      
        error("Password length must be less than 100")
        return false
    }

    if(length == 0){

        error("Password length must be greater than zero")
    }
    if(!upperEl.checked && !lowerEl.checked && !numberEl.checked && !symbolEl.checked){
        error("Please check atleast one checkbox")
        return false
    }
    
    for(let i = 0; i < length; i++) {
    const x = generatex();
    password +=  x;
    }
    pwEl.innerText = password
    error_message.innerText =""


 
   

}

function generatex(){
    const xs = [];
    if(upperEl.checked){
        xs.push(getUppercase())
    }
    if(lowerEl.checked){
        xs.push(getLowercase())
    }
    if(numberEl.checked){
        xs.push(getNumber())
    }
    if(symbolEl.checked){
        xs.push(getSymbol())
    }
    if(xs.length === 0){
      
        return ""
    };
    return xs[Math.floor(Math.random()* xs.length)]
}

generateEl.addEventListener('click', generatePassword)

copyEl.addEventListener('click', ()=>{
    const textarea = document.createElement('textarea');
    const password = pwEl.innerText;

    if(!password){return;}
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    copyMessage();
})
function copyMessage(){
    let small = document.querySelector('small');
    small.style.display = "block";
    setTimeout(function(){
        small.style.display = 'none'
    }, 2000)
}

function  error(msg){
    
   
    error_message.innerText = msg
   error_message.classList ="empty"
    setTimeout(function(){
        error_message.innerText = ""
    }, 4000)
}

