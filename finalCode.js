const input = require("sync-input");

console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

let whatToDo;
let from = "";
let to = "";
let amount = 0;
let result = 0;
const currencies = {
  USD: 1,
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  GBP: 0.75,
};

while (true) {
  console.log(`What do you want to do?`);
  whatToDo = Number(
    input(`1-Convert currencies 2-Exit program
`)
  );
  if (whatToDo !== 1 && whatToDo !== 2) {
    console.log("Unknown input");
    continue;
  }
  if (whatToDo === 1) {
    console.log("What do you want to convert?");
    from = input(`From: `).toUpperCase();
    if (
      from === "USD" ||
      from === "JPY" ||
      from === "EUR" ||
      from === "RUB" ||
      from === "GBP"
    ) {
      to = input(`To: `).toUpperCase();
      if (
        to === "USD" ||
        to === "JPY" ||
        to === "EUR" ||
        to === "RUB" ||
        to === "GBP"
      ) {
        amount = Number(input(`Amount: `));
        if (amount <= 0) {
          console.log("The amount cannot be less than 1");
        } else if (isNaN(amount)) {
          console.log("The amount has to be a number");
        } else {
          let defaultUSD = 1 / currencies[from];
          let newAmount = defaultUSD * amount;

          result = newAmount * currencies[to];
          console.log(
            `Result: ${amount} ${from} equals ${result.toFixed(4)} ${to}`
          );
        }
      } else {
        console.log("Unknown currency");
      }
    } else {
      console.log("Unknown currency");
    }
  } else if (whatToDo === 2) {
    console.log("Have a nice day!");
    break;
  }
}
