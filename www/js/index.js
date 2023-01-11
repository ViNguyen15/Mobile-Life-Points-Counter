
// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
  // Cordova is now initialized. Have fun!
  screen.lockOrientation('landscape');
  loadUi();

}

let p1Life = 8000;
let p2Life = 8000;
let player1 = 1;
let player2 = 2;
let selectedPlayer = player1;
let logAll = [];
let gMinus = 0;
let gPlus = 0;
let lpSound = new Audio("img/lifePoints.mp3");


// clicking player box switches to selected player
function switchPlayer(pNum){
    if(pNum === player1){
      selectedPlayer = player1;
    }if(pNum === player2){
      selectedPlayer = player2;
    }
    console.log("player",pNum,"selected");
    loadHeader();
}


function loadHeader(){
    document.getElementById("headerBox").innerHTML = `
    <div>Player ${selectedPlayer} Selected</div>
  `;
}

function loadPlayer1(){
    document.getElementById("leftBox").innerHTML = `
    <div class="playerBox" onclick="switchPlayer(1)">
      <input class="playerLabel" id="p1Lbl" placeholder="Player1" />
      <input class="lifePoints" id="p1Lp" value="8000"/>
    </div>
  `;
}

function loadPlayer2(){
    document.getElementById("rightBox").innerHTML = `
    <div class="playerBox" onclick="switchPlayer(2)">
      <input class="playerLabel" id="p2Lbl" placeholder="Player2" />
      <input class="lifePoints" id="p2Lp" value="8000"/>
    </div>
    `;
}

function loadFooter(){
    document.getElementById("footerBox").innerHTML = `
    <div>
      <div id="update">
        <input id="updateBox" type="number" value="500"/>
        <button onclick="changePlus()" > + </button>
        <button onclick="changeMinus()" > - </button>
      </div>
  
      <div id="accessories">
        <button onclick="diceRoll()">Roll Dice</button>
        <button onclick="coinFlip()">Flip Coin</button>
      </div>
      
    </div>
  `;
}

function loadUi(){
    loadHeader();
    loadPlayer1();
    loadPlayer2();
    loadFooter();
}


// changeMinus and changePlus is responsible for 
function changeMinus(){
  let lp = document.getElementById(`p${selectedPlayer}Lp`).value;
  gMinus += parseInt(document.getElementById("updateBox").value);
  console.log(gMinus);
  let p = selectedPlayer;
  lpSound.play();
  const x = setInterval(() => {
    if(gMinus > 500){
      gMinusX10(p);
    }
    if(gMinus > 0){
      document.getElementById(`p${p}Lp`).value--;
      gMinus--;
    }
    if( gMinus <= 0){
      clearInterval(x);
      console.log("done");
    }
  },1);

  logger("lost " + parseInt(gMinus));
  logger("is now " + (lp-gMinus));
}

function changePlus(){
  let lp = document.getElementById(`p${selectedPlayer}Lp`).value;
  gPlus -= document.getElementById("updateBox").value;
  let p = selectedPlayer;
  lpSound.play();
  const x = setInterval(() => {
    if(gPlus < -500){
      plusX10(p);
    }
    if(gPlus < 0){
      document.getElementById(`p${p}Lp`).value++;
      gPlus++;
    }
    if( gPlus >= 0){
      clearInterval(x);
      console.log("done");
    }
  },1);
  logger("gain " + gPlus*-1);
  logger("is now " + (lp-gPlus));

}

function fadeMessage(msg){
  document.getElementById("fadeMessage").innerHTML = `
    <div class="message">${msg}</div>
  `;
}




//--------------accessories--------------------

function coinFlip(){
  let coinMath = Math.floor(Math.random()*2);
  let coin = "";
  console.log(coinMath);

  if(coinMath === 0){
    coin = "Head";
  }else{
    coin = "Tail";
  }
  
  let msg = "Flipped " + coin;
  fadeMessage(msg);
  logger(msg);
  
}

function diceRoll(){
  let dice = Math.ceil(Math.random() * 6);
  console.log(dice);

  let msg = "Rolled " + dice;
  fadeMessage(msg);
  logger(msg);
  
}

//----------info logs-----------------------
function logger(msg){
  logAll.push("Player " + selectedPlayer + " " + msg);
  console.log(logAll);
}

function logs(){
  document.getElementById("logs").innerHTML = `
    <div id="logScreen">
      <button id="logBtn" onclick="logEnd()">X</button>
    </div>
  `;

  for(let data of logAll){
    document.getElementById("logScreen").innerHTML += `
      <div class="logText">${data}</div>
      `;
  }
}

function logEnd(){
  document.getElementById("logs").innerHTML = "";
}



// ------initial loading of the page------
loadUi(); 

/* 
  * made for interval 
  * +=10 does not work 
  * (please refactor) 
*/
function plusX10(p){
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
  document.getElementById(`p${p}Lp`).value++;
  gPlus++;
}

function gMinusX10(p){
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
  document.getElementById(`p${p}Lp`).value--;
  gMinus--;
}
  
