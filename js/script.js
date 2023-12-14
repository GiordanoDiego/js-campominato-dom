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
    playGameDifficulty (100);
})

medium.addEventListener('click', function(){
    playGameDifficulty (81);
})

hard.addEventListener('click', function(){
    playGameDifficulty (49);
})

