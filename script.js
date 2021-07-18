const  pwEl  = document.querySelector("#pw")
const copyEl = document.querySelector("#copy")
const lengthEl = document.querySelector("#length")
const upperEl = document.querySelector("#upper")
const lowerEl = document.querySelector("#lower")
const numberEl = document.querySelector("#number")
const symbolEl = document.querySelector("#symbol")
const generateEl = document.querySelector("#generate")

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
    const length = lengthEl.value;
    let password = '';
    for(let i = 0; i < length; i++) {
        const x = generatex();
            password +=  x;
    }
    pwEl.innerText = password

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
    if(xs.length === 0) return "";
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
    copyMessage('Password copied to clipboard');
})
function copyMessage(){
    let small = document.querySelector('small');
    small.style.display = "block";
    setTimeout(function(){
        small.style.display = 'none'
    }, 2000)
}