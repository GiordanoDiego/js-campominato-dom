/*
console.log('nomeVariabile', nomeVariabile, typeof nomeVariabile);

document.getElementById('idHtml').innerHTML = noveVariabileJS;

//valore input 
    userName = document.getElementById('userName');
    userNameValue = userName.value;

//controllare se il valore è Nan
    if(isNaN(kmValue))

*/

/*
Consegna:
    L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    Ogni cella ha un numero progressivo, da 1 a 100.
    Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata

    BONUS:
    Ciao Diego, il bonus per oggi è dare al giocatore la possibilità di controllare il numero di celle che vengono generate. Tramite una select l'utente seleziona il livello di difficoltà e in base a quello vengono generate le celle:
    con difficoltà 1 => 100 celle
    difficoltà 2 => 81 celle
    difficoltà 3 => 49 celle
*/

const boxContainer = document.querySelector('.box-container');
console.log('boxContainer', boxContainer, typeof boxContainer);

const playButton = document.getElementById("play_button");
console.log('playButton', playButton, typeof playButton);

const restetButton = document.getElementById("reset_button");
console.log('restetButton', restetButton, typeof restetButton);

const easy = document.getElementById("difficolta_1");
console.log('easy', easy, typeof easy);
const medium = document.getElementById("difficolta_2");
console.log('medium', medium, typeof medium);
const hard = document.getElementById("difficolta_3");
console.log('hard', hard, typeof hard);


playButton.addEventListener('click', function(){
   const level = document.querySelector('.level_container');
   level.classList.toggle("d-block");
   console.log('level', level, typeof level);
})

restetButton.addEventListener('click', function(){
    boxContainer.innerHTML = "";
 })

easy.addEventListener('click', function(){
    boxContainer.innerHTML= "";
    for(let i=1; i<=100; i++ ){
        const newDiv = document.createElement('div');
        newDiv.classList.add("box", "box-100");
        newDiv.append(i);
        boxContainer.append(newDiv);
    
        //aggiungo il click
        newDiv.addEventListener('click', function(){
            this.classList.toggle('clicked');
            console.log("Hai cliccato la box numero: ", i );
        })
    }
})

medium.addEventListener('click', function(){
    boxContainer.innerHTML= "";
    for(let i=1; i<=81; i++ ){
        const newDiv = document.createElement('div');
        newDiv.classList.add("box" , "box-81");
        newDiv.append(i);
        boxContainer.append(newDiv);
    
        //aggiungo il click
        newDiv.addEventListener('click', function(){
            this.classList.toggle('clicked');
            console.log("Hai cliccato la box numero: ", i );
        })
    }
})

hard.addEventListener('click', function(){
    boxContainer.innerHTML= "";
    for(let i=1; i<=49; i++ ){
        const newDiv = document.createElement('div');
        newDiv.classList.add("box", "box-49");
        newDiv.append(i);
        boxContainer.append(newDiv);
    
        //aggiungo il click
        newDiv.addEventListener('click', function(){
            this.classList.toggle('clicked');
            console.log("Hai cliccato la box numero: ", i );

        })
    }
})

