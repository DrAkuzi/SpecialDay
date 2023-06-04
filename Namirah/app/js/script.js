let isShaking = false;
let popup = document.getElementById("popup")
let text = document.getElementById("text")
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let counter = 0;

Next();


function B1(){
    switch(counter){
        case 2: 
        case 3: 
        case 6: 
        case 7: 
        case 9: 
            ShakeBox(); break;
        default: Next();
    }
}

function B2(){
    switch(counter){
        case 2: 
        case 3: 
        case 6: 
        case 7: 
        case 9: 
            Next(); break;
        default: ShakeBox();
    }
}

function ShakeBox(){
    if(isShaking) return;

    isShaking = true;
    popup.classList.add('shake');
    
    sleep(200).then(() => {
        isShaking = false;
        popup.classList.remove('shake');
    })
}

function Next(){
    counter++;
    popup.classList.add('scaleUp');
    
    sleep(550).then(() => {
        popup.classList.remove('scaleUp');
    })

    let fill ="";
    switch(counter){
        case 1: 
            fill = "Is this your special day?"; 
            break;
        case 2: 
            fill = "Are you a princess?"; 
            b1.innerHTML = "No";
            b2.innerHTML = "Yes";
            break;
        case 3: 
            fill = "Your eyes, are they real?"; 
            b1.innerHTML = "What?";
            b2.innerHTML = "Yes";
            break;
        case 4: 
            fill = "Do you know you are cute?"; 
            b1.innerHTML = "Yes";
            b2.innerHTML = "Duh..";
            break;
        case 5: 
            fill = "Will you stop bullying me?"; 
            b1.innerHTML = "No";
            b2.innerHTML = "NOT AT ALL";
            break;
        case 6: 
            fill = "WHY?"; 
            b1.innerHTML = "Why not?";
            b2.innerHTML = "Razi is cool";
            break;
        case 7: 
            fill = "Awww gee thanks. Soo.."; 
            b1.innerHTML = "Soo?";
            b2.innerHTML = "Huh?";
            break;
        case 8: 
            fill = "Before we proceed, do you agree that we're no longer 2 years apart?"; 
            b1.innerHTML = "Yes";
            b2.innerHTML = "Absolutely not";
            break;
        case 9: 
            fill = "This is not much but I made a poem. Enjoy your holiday!"; 
            b1.innerHTML = "Awesome";
            b2.innerHTML = "ooooo";
            break;
        case 10: 
            document.getElementById("overlay").style.visibility = "hidden";
            confetti.start();
            sleep(2000).then(() => {
                confetti.stop();
            })
            break;
    }

    text.innerHTML = fill;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
