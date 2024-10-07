/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('In JavaScript esistono 5 tipi di dati principali')
console.log('Stringhe: permettono di inserire una serie di caratteri')
console.log(
  'Numeri: questo tipo di "datatype" ti permette di inserire numeri interi, decimali, ecc...'
)
console.log(
  'Booleans: con questo dato potrai verificare, ad esempio, se è vero oppure falso che 10 > 2'
)
console.log('Null: questo dato rappresenta la mancanza completa di un valore')
console.log(
  'Undefined: questo dato invece rappresenta il valore di una variabile che non è stata assegnata'
)

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = 'Tommaso'
console.log('Mi chiamo', myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sum = 12 + 20
console.log('La somma di 12 + 20 è', sum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12
console.log('Il valore di x è', x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = 'Panciroli'
console.log('Il mio cognome è', myName)
//const myName = 'Panciroli'

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sottraction = x - 4
console.log('Il risultato di X - 4 è', sottraction)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = 'john'
let name2 = 'John'
//const boolean1 = 'john' !== 'John'
//console.log('boolean1', boolean1)

//CORREZIONE
//AL POSTO DI CONST BOOLEAN
let result = name1 === name2 // false
console.log('Il risultato dell uguaglianza è', result)

//EXTRA
//let lowercase = 'John'.toLowerCase
//const boolean2 = name1 === name2
//console.log('boolean2', boolean2)

//CORREZIONE
let resultInLowerCase = name1.toLowerCase() === name2.toLowerCase()
console.log('resultInLowerCase', resultInLowerCase)
