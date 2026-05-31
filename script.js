const textArray = [
    "Learning new things",
    "Open Source Contributor",
    "Linux Enthusiast",
    "Cybersecurity Learner",
    "Building Cool Things"
];

let typeJsText = document.querySelector(".animatedText");

let stringIndex = 0;
let charIndex = 0;
let isTyping = true;

function typeJs(){

    const currentString = textArray[stringIndex];

    if(isTyping){

        if(charIndex < currentString.length){

            typeJsText.innerHTML += currentString.charAt(charIndex);
            charIndex++;

        }else{

            isTyping = false;
        }

    }else{

        if(charIndex > 0){

            typeJsText.innerHTML =
                currentString.substring(0,charIndex-1);

            charIndex--;

        }else{

            isTyping = true;

            stringIndex++;

            if(stringIndex >= textArray.length){
                stringIndex = 0;
            }

            typeJsText.innerHTML = "";
            charIndex = 0;
        }
    }
}

setInterval(typeJs,120);