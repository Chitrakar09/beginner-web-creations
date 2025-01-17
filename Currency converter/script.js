let base_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

let selectlist = document.querySelectorAll("select");
let imgFrom = document.querySelector("#imgFrom");
let imgTo = document.querySelector("#imgTo");
let button = document.querySelector("#button");
let input = document.querySelector("#input");
let output = document.querySelector("#output");
let selectFrom = document.querySelector("#select_from");
let selectTo = document.querySelector("#select_to");

// function to change country flag
const updateFlag = (country) => {
  let countryCd = countryList[country.value];
  let URL = `https://flagsapi.com/${countryCd}/flat/64.png`;
  if (country.name === "from") {
    imgFrom.setAttribute("src", URL);
  } else if ((country.name = "to")) {
    imgTo.setAttribute("src", URL);
  }
};

// to insert country codes and select the country
for (let eachselect of selectlist) {
  for (let countryCode in countryList) {
    options = document.createElement("option");
    options.text = countryCode;
    options.value = countryCode;
    if (eachselect.name === "from" && options.text === "USD") {
      options.selected = "selected";
    } else if (eachselect.name === "to" && options.text === "NPR") {
      options.selected = "selected";
    }
    eachselect.appendChild(options);
  }
  eachselect.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// function for conversion
let conversion = async () => {
  amount = input.value;
  let cc=selectFrom.value.toLowerCase();
  url = `${base_URL}/${cc}.json`;
  let response = await fetch(url);
  let data = await response.json();
  let rate= data[cc][selectTo.value.toLowerCase()];
  console.log(rate);
  let finalAmount= amount*rate;
  output.value=finalAmount;
};

// clicking the button
button.addEventListener("click", (evt) => {
  evt.preventDefault();
  conversion();
});

// windows on load
window.addEventListener("load",()=>{
conversion();
})