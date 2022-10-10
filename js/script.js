// Scrivi un programma che stampi in console i numeri da 1 a 100, 
//ma che per i multipli di 3 stampi “Fizz” al posto del numero e per 
//i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli 
//di 3 che di 5 stampi “FizzBuzz”.
// BONUS 1: Crea un container nel DOM , aggiungendo 
//(attraverso la funzione append()) un elemento html con il numero
// o la stringa corretta da mostrare.
// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel 
//BONUS 1, a seconda che il valore inserito sia un numero,
// un fizz, un buzz o un fizzbuzz.
let wrap = document.querySelector("div.my-container")

for (let i = 1; i<= 100; i++){
    let div = document.createElement('div')
    wrap.append(div)
    let box = document.querySelector('div.my-container div:last-child')
    if (i%3 == 0 && i%5 == 0){
        box.className = 'box-3-5'
        // box.append('FizzBuzz')
        box.innerHTML = 'FizzBuzz'
    }else if (i%3 == 0){
        box.className = 'box-3'
        // box.append('Fizz')
        box.innerHTML = 'Fizz'
    }
    else if (i%5 == 0){
        box.className = 'box-5'
        // box.append('Buzz')
        box.innerHTML = 'Buzz'
    }
    else{
        box.className = 'box'
        // box.append(i)
        // box.innerHTML = 'None'
    }
}