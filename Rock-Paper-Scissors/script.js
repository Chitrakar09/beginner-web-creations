let Rock = document.querySelector("#Rock");
let Paper = document.querySelector("#Paper");
let Scissor = document.querySelector("#Scissor");
let compChoiceContainer = document.querySelector(".computerChoice");
let msgContainer = document.querySelector(".msgContainer");
let scoreForYou = document.querySelector("#you");
let scoreForComputer = document.querySelector("#computer");
let scoreForDraw = document.querySelector("#draw");

let choice = ["Rock", "Paper", "Scissor"];
let myChoice;
let min = 1;
let max = 3;
let randomGen;
let computerChose;
let countForYou =0;
let countForComputer =0;
let countForDraw=0 ;

// computer choice
let computerChoice = () => {
  if (randomGen === 1) {
    computerChose = choice[0];
  } else if (randomGen === 2) {
    computerChose = choice[1];
  } else {
    computerChose = choice[2];
  }
  return computerChose;
};

// computer choice display container customization
let dispCompMove = () => {
  compChoiceContainer.classList.remove("hide");
  compChoiceContainer.innerText = `I chose: ${computerChoice()}`;
};

// Condition on click

let onclickRock = Rock.addEventListener("click", () => {
  myChoice = choice[0];
  randomGen = Math.floor(Math.random() * (max - min + 1)) + min;

  if (randomGen === 1) {
    dispCompMove();
    msgContainer.innerText =
      "🤝 A perfect tie! Shall we go for another round and break the tie? ⚡️";
    countForDraw++;
    scoreForDraw.innerHTML = `Draws:${countForDraw}`;
  } else if (randomGen === 2) {
    dispCompMove();
    msgContainer.innerText ="😅 Close call! You’ll get them next time, champion! Ready for another try? ⚡️";
    countForComputer ++;
    scoreForComputer.innerHTML = `A.I:${countForComputer}`;
  } else {
    dispCompMove();
    msgContainer.innerText =
      `🎉 Amazing win! Ready to take on the next challenge?`;
    countForYou ++;
    scoreForYou.innerHTML = `You:${countForYou}`;
  }
});

let onclickPaper = Paper.addEventListener("click", () => {
  myChoice = choice[1];
  randomGen = Math.floor(Math.random() * (max - min + 1)) + min;

  if (randomGen === 1) {
    dispCompMove();
    msgContainer.innerText =
      `🏆 You did it! Let’s go for another round! 💥`;
    countForYou ++;
    scoreForYou.innerHTML = `You:${countForYou}`;
  } else if (randomGen === 2) {
    dispCompMove();
    msgContainer.innerText =
      "✨ It's a draw! Let's see who'll come out on top next time! 💥";
      countForDraw++;
      scoreForDraw.innerHTML = `Draws:${countForDraw}`;
  } else {
    dispCompMove();
    msgContainer.innerText = "🙌 Tough luck, but you’re still a winner in our book! Let’s go again! 💥";
    countForComputer ++;
    scoreForComputer.innerHTML = `A.I:${countForComputer}`;
  }
});

let onclickScissor = Scissor.addEventListener("click", () => {
  myChoice = choice[2];
  randomGen = Math.floor(Math.random() * (max - min + 1)) + min;

  if (randomGen === 1) {
    dispCompMove();
    msgContainer.innerText =
      "💪 Not this time, but don't worry — the next round is yours! Ready for another? 🎮";
    countForComputer ++;
    scoreForComputer.innerHTML = `A.I:${countForComputer}`;
  } else if (randomGen === 2) {
    dispCompMove();
    msgContainer.innerText = `🔥 Victory is yours! Shall we play again? 🎮`;
    countForYou ++;
    scoreForYou.innerHTML = `You:${countForYou}`;
  } else {
    dispCompMove();
    msgContainer.innerText =
      "🔄 A thrilling draw! Ready to make the next round even more exciting? 🎮";
      countForDraw++
    scoreForDraw.innerHTML = `Draws:${countForDraw}`;
  }
});
