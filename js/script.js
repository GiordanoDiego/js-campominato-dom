/*-------------FUNCTION-------------*/

function playGameDifficulty (x){
    boxContainer.innerHTML= "";
    for(let i=1; i<=x; i++ ){
        const newDiv = document.createElement('div');
        newDiv.classList.add("box", "box-" + x);
        newDiv.append(i);
        boxContainer.append(newDiv);
    
        //aggiungo il click
        newDiv.addEventListener('click', function(){
            this.classList.toggle('clicked');
            console.log("Hai cliccato la box numero: ", i );
        })
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


//genero 16 numeri casuali
const arrayBomb = []; // array vuoto
//riempo array
while (arrayBomb.length < 16){
    let randomNumber = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
    let isPresent = arrayBomb.includes(randomNumber);
    if(!isPresent){
        arrayBomb.push(randomNumber);
    }
}
console.log('arrayBomb',arrayBomb, typeof arrayBomb); //stampo posizione bombe


playButton.addEventListener('click', function(){
   const level = document.querySelector('.level_container');
   level.classList.toggle("d-block");
   console.log('level', level, typeof level);
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

