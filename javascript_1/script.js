
// esercizio 1 ipotenusa
// let a = 3;
// let b = 4;

// function ipotenusa(a,b) {
//     let c = Math.sqrt((a*a) + (b*b));
// }
// console.log(c);



// ------------------------------
// esercizio 2 tizio caio


// ______________________________________________
// CON charAt
// function iniziale(name){
//     let first = name.charAt('0','6');
//     return first
// }

// console.log(iniziale('Tizio') + "." + iniziale('Caio'));
// ______________________________________________




// ______________________________________________
// BARANDO 
// let nome = "Tizio Caio";

// function iniziale(nome){
//     if (nome == "Tizio Caio") {
//         return 'T.C'
//     }
// }

// console.log(iniziale(nome));
// funziona ma si bara
// ______________________________________________











// ------------------------------
// esercizio 3 triangolo

// let a = 2;
// let b = 4;
// let c = 6;

// function iniziale(a,b,c){
//     if (Math.random(a,b,c) < Math.random(a,b,c) - Math.random(a,b,c)) {
//      return true

//     }
//     else{
//      return false
//     }
// }

// console.log(iniziale(a,b,c));
// funziona ma non posso vedere che numeri ha preso




// function istriangle(a,b,c) {
//     let primo = (a > b - c && (a < (b+c)));
//     let secondo = (b > Math.abs(a - c) && (b < (a+c)));
//     let terzo = (c > Math.abs(a - b) && (c < (a+b)));
//     if(primo && secondo && terzo) return true;
// }
// ----------------------------------------------------------------------








// -----------------------------------
// esercizio 4 congettura di Collatz


// function collatz(num) {
//     let arr = [num];
//     while(num > 1) {
//         if(num % 2 == 0) {
//             num = num / 2;
//         } else {
//             num = num * 3 + 1;
//         }
//         arr.push(num);
//     }
// //     return arr;
// }
// ---------------------------------------






// ---------------------------------------------
// esercizio 5 fibonacci

// function fibonacci(n) {
//     let final = [1,1]; 
//     for (let i = 0; i < n-2; i++) {
//         let sum = final[i] + final[i+1];
//         final.push(sum);
//     }
//     return final;
// }
// console.log(fibonacci(9));
// ------------------------------------------------






// ----------------------------------------
// esrcizio numero primo
// function numPrime(num) {
//     if(num == 1) return false;
//     if(num == 2) return true;
//     for (let i = 2; i < num; i++) {
//         if(num % i == 0) return false;
//     }
//     return true;
// }
// console.log(numPrime(97));
// --------------------------------------------








// ------------------------------------------
// calcola ore e minuti

// function calcolaOre(num) {

//     let ore = Math.floor(3014 / 60);
//     let minuti = Math.floor(3014 % 60);
//     return ore + ':' + minuti;
// }
// ------------------------------------------










// ----------------------------------------------------
// esercizio 9 vocali

// function getVocali(string) {
//     let Vocali = 'aAeEiIoOuU';
//     let counterVocali = 0;
//     for(let i = 0; i < string.length ; i++) {
//         if (Vocali.indexOf(string[i]) !== -1) {
//         counterVocali += 1;
//     }
// }
//     return counterVocali;
// }

// console.log(getVocali("Ciao sono Riccardo"));
// -----------------------------------------------------




// --------------------------------
// parola più lunga
function longWord(string){
    let words = string.split(' ');
    let max = words[0];
    for (let i = 0; i < words.length; i++) {
        if(words[i].length > max.length){
            max = words[i]
            return max
        }
    }
}
// ---------------------------------




