for(let i = 1; i<10; i++){
  document.querySelector(`.moveSquare${i}`).innerHTML = ' ';
}

let playing = true;

function move(num){
  //document.querySelector(`.moveSquare${num}`).innerHTML = 'X';
  if(document.querySelector(`.moveSquare${num}`).innerHTML==="X" ||
  document.querySelector(`.moveSquare${num}`).innerHTML==="O"){
    move(num);
  }
  else{
    document.querySelector(`.moveSquare${num}`).innerHTML="X";
  }
}

function compMove(){
  let ran = Math.round(Math.random()*8) + 1;
  if(document.querySelector(`.moveSquare${ran}`).innerHTML==="X" ||
  document.querySelector(`.moveSquare${ran}`).innerHTML==="O"){
    compMove();
  }
  else{
    document.querySelector(`.moveSquare${ran}`).innerHTML="O";
  }
  
}

function play(num){
    if(playing === true){
      move(num);
    }
    setTimeout(function(){
        win('X');
    },500);
    setTimeout(function(){
      if(playing === true){
        try{compMove();}
      catch{};
      }
    },1000);
    setTimeout(function(){
      win("O");
    },1500);
}

function win(placeholder){
  if(document.querySelector(`.moveSquare1`).innerHTML === `${placeholder}` &&
  document.querySelector(`.moveSquare2`).innerHTML === `${placeholder}` &&
  document.querySelector(`.moveSquare3`).innerHTML === `${placeholder}`){
    if(placeholder === 'X'){
      alert('You Win');
      playing = false;
    }
    else if(placeholder === "O"){
      alert('You lose');
      playing = false;
    }
  }
  else if(document.querySelector(`.moveSquare1`).innerHTML === `${placeholder}` &&
  document.querySelector(`.moveSquare4`).innerHTML === `${placeholder}` &&
  document.querySelector(`.moveSquare7`).innerHTML === `${placeholder}`){
    if(placeholder === 'X'){
      alert('You win');
      playing = false;
    }
    else if(placeholder === "O"){
      alert('You lose');
      playing = false;
    }
  }
  else if(document.querySelector(`.moveSquare1`).innerHTML === `${placeholder}` &&
  document.querySelector(`.moveSquare5`).innerHTML === `${placeholder}` &&
  document.querySelector(`.moveSquare9`).innerHTML === `${placeholder}`){
    if(placeholder === 'X'){
      alert('You win');
      playing = false;
    }
    else if(placeholder === "O"){
      alert('You lose');
      playing = false;
    }
  }
  else if(document.querySelector(`.moveSquare4`).innerHTML === `${placeholder}` &&
  document.querySelector(`.moveSquare5`).innerHTML === `${placeholder}` &&
  document.querySelector(`.moveSquare6`).innerHTML === `${placeholder}`){
    if(placeholder === 'X'){
      alert('You win');
      playing = false;
    }
    else if(placeholder === "O"){
      alert('You lose');
      playing = false;
    }
  }
  else if(document.querySelector(`.moveSquare7`).innerHTML === `${placeholder}` &&
  document.querySelector(`.moveSquare8`).innerHTML === `${placeholder}` &&
  document.querySelector(`.moveSquare9`).innerHTML === `${placeholder}`){
    if(placeholder === 'X'){
      alert('You win');
      playing = false;
    }
    else if(placeholder === "O"){
      alert('You lose');
      playing = false;
    }
  }
  else if(document.querySelector(`.moveSquare2`).innerHTML === `${placeholder}` &&
  document.querySelector(`.moveSquare5`).innerHTML === `${placeholder}` &&
  document.querySelector(`.moveSquare8`).innerHTML === `${placeholder}`){
    if(placeholder === 'X'){
      alert('You win');
      playing = false;
    }
    else if(placeholder === "O"){
      alert('You lose');
      playing = false;
    }
  }
  else if(document.querySelector(`.moveSquare3`).innerHTML === `${placeholder}` &&
  document.querySelector(`.moveSquare6`).innerHTML === `${placeholder}` &&
  document.querySelector(`.moveSquare9`).innerHTML === `${placeholder}`){
    if(placeholder === 'X'){
      alert('You win');
      playing = false;
    }
    else if(placeholder === "O"){
      alert('You lose');
      playing = false;
    }
  }
  else if(document.querySelector(`.moveSquare3`).innerHTML === `${placeholder}` &&
  document.querySelector(`.moveSquare5`).innerHTML === `${placeholder}` &&
  document.querySelector(`.moveSquare7`).innerHTML === `${placeholder}`){
    if(placeholder === 'X'){
      alert('You win');
      playing = false;
    }
    else if(placeholder === "O"){
      alert('You lose');
      playing = false;
    }
  }
}