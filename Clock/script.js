const secondsHand = document.querySelector("#sec-hand");
const minHand = document.querySelector("#min-hand");
const hourHand = document.querySelector("#hour-hand");
const hands = document.querySelectorAll(".hand");

let getTime = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();

  const secondsDegree = (seconds / 60) * 360 + 90;
  const minDegree = (min / 60) * 360 + 90;
  const hourDegree = (hour / 12) * 360 + 90;

  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

  minHand.style.transform = `rotate(${minDegree}deg)`;

  hourHand.style.transform = `rotate(${hourDegree}deg)`;
};

setInterval(getTime, 1000);
