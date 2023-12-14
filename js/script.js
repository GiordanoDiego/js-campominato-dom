/*-------------FUNCTION-------------*/

function playGameDifficulty (x){
    const arrayBomb = []; // array vuoto
    //riempo array
    //genero 16 numeri casuali
    while (arrayBomb.length < 16){
        let randomNumber = Math.floor(Math.random() * (x - 1 + 1) ) + 1;
        let isPresent = arrayBomb.includes(randomNumber);
        if(!isPresent){
            arrayBomb.push(randomNumber);
        }
    }
    console.log('arrayBomb',arrayBomb, typeof arrayBomb); //stampo posizione bombe

    let counter = 0;
    console.log("Counter iniziale =  ", counter );

    boxContainer.innerHTML= "";
    for(let i=1; i<=x; i++ ){
        const newDiv = document.createElement('div');
        newDiv.classList.add("box", "box-" + x);
        newDiv.append(i);
        boxContainer.append(newDiv);
    
        //aggiungo il click
        //se i è inclusa nell'array allora aggingo la classe bomb altrimenti noBomb
        if (arrayBomb.includes(i)){
            newDiv.addEventListener('click', function(){
                this.classList.add('Bomb');
                alert("Hai perso, pollo, il tuo punteggio è di: " + counter + "\nPuoi iniziare una nuova partita");
                boxContainer.innerHTML= "";
            })
        }
        else{
            newDiv.addEventListener('click', function(){
                if (!this.classList.contains('noBomb')){
                    counter++;
                    console.log("Counter iniziale =  ", counter );
                    if(counter == x - 16){
                        alert("Hai vinto, il tuo punteggio è di:" + counter + "\nPuoi iniziare una nuova partita");
                        boxContainer.innerHTML= "";
                    }
                }
                this.classList.add('noBomb');
                console.log("Hai cliccato la box numero: ", i );
            })
        }
       
    }
}

/* ------------CODE---------- */
// elementi selezionati da html
const boxContainer = document.querySelector('.box-container');
const playButton = document.getElementById("play_button");
const restetButton = document.getElementById("reset_button");
const easy = document.getElementById("difficolta_1");
const medium = document.getElementById("difficolta_2");
const hard = document.getElementById("difficolta_3");


playButton.addEventListener('click', function(){
   const level = document.querySelector('.level_container');
   level.classList.toggle("d-block");
})

restetButton.addEventListener('click', function(){
    boxContainer.innerHTML = "";
 })

easy.addEventListener('click', function(){
    playGameDifficulty (100);
})

medium.addEventListener('click', function(){
    playGameDifficulty (81);
})

hard.addEventListener('click', function(){
    playGameDifficulty (49);
})

