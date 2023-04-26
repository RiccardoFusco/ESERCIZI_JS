function doubleAndLog(num){
    const double = num * 2;
    console.log(`il nuovo numero è ${double}`);
}
// QUA SOPRA FUNZIONE CHE  RADDOPPIA




function divideAndLog(num){
    const half = num / 2;
    console.log(`il nuovo numero è ${half}`)
}
// QUA SOPRA FUNZIONE CHE  DIVIDE




function sumThreeAndLog(num){
    const summed = num + 3;
    console.log(`il nuovo numero è ${summed}`)
}
// QUA SOPRA FUNZIONE CHE  SOMMA 3




function changeAndLog(num, istruzioni){
    const changed = istruzioni(num);
    console.log(`il nuovo numero è ${changed}`);
}
// QUA SOPRA FUNZIONE CHE  RADDOPPIA




const double = x => x * 2;
const divide = x => x / 2;
const sumThree = x => x + 3;

changeAndLog(3, double);//* callback
changeAndLog(3, divide);//* callback
changeAndLog(3, sumThree);//* callback

// * funzione di ordine superiore ( funzione che accetta come parametro una funzione e che può anche ritornare una funzione )
// ! alla variabile incrementatore viene assegnato una funzione che restituisce un'altra funzione
let incrementatore = function(incremento){
    return function(valore){
        return incremento + valore;
    }
}

// console.log(incrementatore);
let incrementadicinque = incrementatore(5);
console.log(incrementadicinque(4));


let counter = 1;
function outer(){
    //* questo valore è vivo, è presente in memoria
    let counter = 1;
    function incrementCounter(){
        console.log(counter)
        return counter++;
    }
    return incrementCounter;
}
const newFunction = outer();
newFunction();
newFunction();
newFunction();
newFunction();
newFunction();
newFunction();
newFunction();
console.log(counter);