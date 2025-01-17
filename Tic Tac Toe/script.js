/* 
  logic:
  1. to access individual box
  2. to access individual win condition
  3. to access individual values of condition
  4. to connect each individual box to each individual values of condition
  5. to check if the box are emptyy or not
  6. to check if the three box have equal value
  7. if true then print winner
    --> if winner found then stop all the boxes from clicking.
  9. else check for draw
    --> reload game
 */

let boxes = document.querySelectorAll(".box"); //access boxes
let winMsg = document.querySelector(".winMsg-container"); // access div containing winning/draw msg
let resetButton = document.querySelector(".reload"); // access reset button
let winCondition = [    // Pattern for winning
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0,4, 8],
  [2, 4, 6],
];
let turnForO = true; // turnforO=true is for O and turnforO=falso for X

const reload=()=>{ // function for reload
  winMsg.innerText="";
  boxes.forEach((box)=>{
    box.innerText="";
    box.disabled=false;
  });
  turnForO=true;
  resetButton.innerText="Reset";
}

resetButton.addEventListener("click",reload); // Event that happens on click.

const disableAllBoxes=()=>{ // function to disable all boxes
  boxes.forEach((box)=>{
    box.disabled=true;
  })
}

const check=()=>{ // function for checking win or draw
  let c=0;
  winCondition.forEach((condition)=>{  // access individual boxes
    let boxPlaceForFirstValueOfcondition= boxes[condition[0]];  //to connect each individual box to each individual values of condition
    let boxPlaceForSecondValueOfcondition= boxes[condition[1]]; // hint: win condition ko each condition ko pani individual value access garda tyo value ma kun box parxa
    let boxPlaceForThirdValueOfcondition= boxes[condition[2]];
    if(boxPlaceForFirstValueOfcondition.innerText!==""&&boxPlaceForSecondValueOfcondition.innerText!==""&&boxPlaceForThirdValueOfcondition.innerText!=="") // to check if box are empty or not
    {
        if(boxPlaceForFirstValueOfcondition.innerText===boxPlaceForSecondValueOfcondition.innerText&&boxPlaceForFirstValueOfcondition.innerText===boxPlaceForThirdValueOfcondition.innerText) // to check if the individual boxes have same value or not
        {
            winMsg.innerHTML=`!!!CONGRATULATIONS!!! '${boxPlaceForFirstValueOfcondition.innerText}' WON`; // winning msg
            disableAllBoxes(); // to make the remaining boxes unclickabale after winning
            resetButton.innerText="New Game";
        }
        else
        {
            c+=1;
        }
        if(c===8)// to check for draw .
        {         //logic: the winCOndition.forEach runs loop till all the box are accessed. for first loop, if no win condition satisfied then count increment by 1. this continues for all boxes. if no win condition found till 8th loop then draw. 
            winMsg.innerText="!!!Draw!!!";
            resetButton.innerText="Reset";
        }
    }
});
}

// Access individual boxes.

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnForO) { // if true then box will print O in that box
      box.innerText = "O";
      turnForO = false;
    } else {
      box.innerText = "X"; // if false the box will print X in that box
      turnForO = true;
    }
    box.disabled = true;
    check(); // check for win after each loop.
  });
});

