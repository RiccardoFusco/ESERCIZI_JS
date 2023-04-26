// let smartphone = {
    //! attributi / proprietà
    //* chiave:valore
    //* le chiavi possono essere stringhe
//     'nome telefono': 'Samsung Galaxy S22',
//     'memoria' : 12,
//     'connettore': 'Type-C',
//     'rubrica': [
//         {'nome': 'Valerio', 'numero': '333333'},
//         {'nome': 'Silvia', 'numero': '4444444'}
//     ],
//     //! metodi
//     'stampaNome': function () {
//         console.log(this['nome telefono'])
//     },
//     'stampaRubrica': function() {
//         this.rubrica.forEach(contact => console.log(`${contact['nome']} : ${contact['numero']}`));
//     }
// }

// // * ciclare gli oggetti
// for(key in smartphone){
//     console.log(smartphone[key])
// };











//PROXY CON PASSWORD
// let proxy = {
// // * un oggetto che protegge un altro oggetto
// // * oggetto da proteggere
// let persona = {
//     name: "Andrea",
//     surname: ""
// }
// let loggeduser = {
//     isAdmin:false
// }
// //* oggeto che protegge l'oggetto da proteggere
// //* controllare ciò che accade quando provo ad accedere ( inlettura e in scrittura ) ad una proprietà dell'oggetto che sto proteggendo
// let proxy = {
//     //* accedere in lettura -> get
//     //* target -> l'oggetto che stiamo proteggendo ( persona )
//     //* propertyName -> l'attributo a cui vogliamo accedere
//     get(target, propertyName){
//         if(loggeduser.isAdmin){
//             return target[propertyName]
//         }
//         throw Error ("TU NON PUOI PASSARE!");
//     },
//     //* accedere in scrittura -> set
//     set(target, propertyName, value){
//         let pwd = 'asd';
//         let insertPwd = prompt('inserisci la pwd');
//         console.log(value != '');
//         if(value != '' && pwd == insertPwd){
//             target[propertyName] = value;
//         } else {
//             throw Error ("FUGGITE SCIOCCHI!");
//         }
//     }
// }

// let personaProxata = new Proxy(persona, proxy);

// personaProxata.name = "Ciccio";
// console.log(persona.name)





// _________________________________________
// _________________________________________
// _________________________________________
//        ______  DOM  _____
// _________________________________________
// _________________________________________
// _________________________________________


// let title = document.querySelector('#title');
// console.log(title.style.backgroundColor);
// title.style.backgroundColor = 'yellow';


// let btn = document.querySelector('#btn')

// function onclickfunction() { console.log('cliccato') }
// btn.addEventListener('click', onclickfunction)
