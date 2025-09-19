const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Add currency options to dropdowns
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.value = currCode;
        newOption.innerText = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = true;
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = true;
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// Update country flag
function updateFlag(element) {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let img = element.parentElement.querySelector("img");
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

// Get exchange rate and display conversion
async function getExchangeRate() {
    const amount = document.querySelector(".amount input");
    let amtVal = parseFloat(amount.value);
    if (isNaN(amtVal) || amtVal <= 0) {
        msg.innerText = "Please enter a valid amount";
        return;
    }

    const from = fromCurr.value;
    const to = toCurr.value;

    msg.innerText = "Fetching exchange rate...";

    try {
        let response = await fetch(`${BASE_URL}?base=${from}&symbols=${to}`);
        let data = await response.json();
        let rate = data.rates[to];
        let finalAmount = (amtVal * rate).toFixed(2);
        msg.innerText = `${amtVal} ${from} = ${finalAmount} ${to}`;
    } catch (error) {
        msg.innerText = "Error fetching rate. Please try again.";
        console.error("Fetch Error:", error);
    }
}

// Event listener for Convert button
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    getExchangeRate();
});

window.addEventListener("load", () => {
    getExchangeRate();
});
