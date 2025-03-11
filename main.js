
let num1 = 24;
let num2 = 35;

console.log(`Il valore della variabile num1 è ${num1}`);
console.log(`Il valore della variabile num2 è ${num2}`);

let stringa =` "Mi piace JS" `;
console.log(`Il valore della varibile stringa è ${stringa}`);


stringa = ` "Mi correggo mi piace tantissimo JS" `

console.log(stringa);

const PIGRECO = 3.14159265359;
console.log(`Il valore di PIGRECO è ${PIGRECO}`);

// PIGRECO = 5;

// // console.log(PIGRECO); 
// // // chiaramente errore!!


// secondo esercizio
console.log("--- inizio secondo esercizio ---");

let primo = 5;
let secondo = 15;
let terzo = 20;
let quarto = 3;
let quinto= 7;

let somma = primo + secondo + terzo + quarto + quinto;
console.log(`La somma tra i numeri equivale a ${somma}`);

let media = somma / 5;
console.log(`La media tra i numeri equivale a ${media}`);
// terzo esercizio
console.log("--- inizio terzo esercizio ---");
let annoCorrente = 2025;
let annoNascita = 1995;

let anni = annoCorrente - annoNascita;
let anniAiCento = 100 - anni;

console.log(`Hai ${anni} anni e ti mancano ${anniAiCento}  anni per compierne 100`);

// //  quarto esercizio
console.log("--- inizio quarto esercizio ---");
let scelta1 = Number(prompt("Scegli il primo numero"));
let scelta2 = Number(prompt("Scegli il secondo numero"));
let somma1 = scelta1 + scelta2;
let sottrazione = scelta1 - scelta2;
let moltiplicazione = scelta1 * scelta2;
let divisione = scelta1 / scelta2;
let potenza1 = scelta1 ** 2;
let potenza2 = scelta2 ** 2;

console.log(` Con i numeri da te scelti, i risultati delle varie operazioni sono : \n somma = ${somma1} ; \n sottrazione = ${sottrazione}; \n moltiplicazione = ${moltiplicazione} ; \n divisone = ${divisione} ; \n potenza alla seconda del primo numero scelto = ${potenza1} ;\n potenza alla seconda del secondo numero scelto = ${potenza2} \n`);

//  quinto esercizio
console.log("--- inizio quinto  esercizio ---");

let numeroGatti = 44;
let numeroGattiPerFila = 10;

let numeroFile = Math.floor(numeroGatti / numeroGattiPerFila);
let gattiRimanenti = numeroGatti % numeroGattiPerFila;
let avanzo = numeroGattiPerFila - gattiRimanenti;

console.log(`Ci sono ${numeroFile} file di gatti e ne mancano ${gattiRimanenti} per una nuova fila, con un avanzo di ${avanzo}`);






