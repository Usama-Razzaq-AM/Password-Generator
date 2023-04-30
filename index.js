const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6",
 "7","8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}",
 "]",",","|",":",";","<",">",".","?","/"];


function generatePassword(){
    generatePasswordOne();
    generatePasswordTwo();
}

 /*--------------------------Generating Password One-------------------------- */

let placeOne=document.getElementById("passwordOne");
let passwordOne=[];

function generatePasswordOne() {

/*loop to empty passwordOne array, so that it replaces previous password when 
'Generate Password' button is clicked again.*/    
    for (let i=0; i<15; i++) {
        passwordOne.pop();
        placeOne.textContent=passwordOne[i];
    }

/*loop to fill passwordOne array with a password of random digits.*/
    for (let i=0; i<15; i++) {
        passwordOne[i]=getRandomDigit();
        placeOne.textContent+=passwordOne[i];
    }
}

/*----------------------------Generating Password Two-------------------------- */

let placeTwo=document.getElementById("passwordTwo");
let passwordTwo=[];

function generatePasswordTwo() {

/*loop to empty passwordTwo array, so that it replaces previous password when 
'Generate Password' button is clicked again.*/
    for (let i=0; i<15; i++) {
        passwordTwo.pop();
        placeTwo.textContent=passwordTwo[i];
    }

/*loop to fill passwordTwo array with a password of random digits.*/
    for (let i=0; i<15; i++){
        passwordTwo[i]=getRandomDigit();
        placeTwo.textContent+=passwordTwo[i];
    }
}


/*-----------------Getting random digit from array of characters------------------*/

function getRandomDigit() {
    let num=Math.floor(Math.random()*characters.length); 
    let randomDigit=characters[num];
    return randomDigit;
}