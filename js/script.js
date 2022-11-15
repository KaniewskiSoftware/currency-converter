let calculator = document.querySelector(".js-calculator");
let jsAmount = document.querySelector(".js-amount");
let jsStartCurrency = document.querySelector(".js-startCurrency");
let jsEndCurrency = document.querySelector(".js-endCurrency");
let jsResult = document.querySelector(".js-result");

calculator.addEventListener("input", () => {
  // kwota * przelicznik = wynik
  let result;
  let rate;
  let currency = " " + jsEndCurrency.options[jsEndCurrency.selectedIndex].text;
  if (
    jsStartCurrency.options[jsStartCurrency.selectedIndex].text ===
    jsEndCurrency.options[jsEndCurrency.selectedIndex].text
  )
    rate = 1;

  switch (
    jsStartCurrency.options[jsStartCurrency.selectedIndex].text +
    jsEndCurrency.options[jsEndCurrency.selectedIndex].text
  ) {
    case "PLNEUR":
      rate = 0.21307;
      break;
    case "PLNUSD":
      rate = 0.21301;
      break;
    case "PLNCHF":
      rate = 0.210728;
      break;
    case "USDPLN":
      rate = 4.6595;
      break;
    case "USDEUR":
      rate = 1.00011;
      break;
    case "USDCHF":
      rate = 0.989302;
      break;
    case "CHFPLN":
      rate = 4.74466;
      break;
    case "CHFEUR":
      rate = 1.01104;
      break;
    case "CHFUSD":
      rate = 1.01081;
      break;
    case "EURPLN":
      rate = 4.6678;
      break;
    case "EURUSD":
      rate = 0.999743;
      break;
    case "EURCHF":
      rate = 0.989049;
      break;

    default:
      jsResult.innerText = "Chwilowa awaria, spróbuj jeszcze raz.";
  }

  result = jsAmount.value * rate;
  jsResult.innerText = result.toFixed(2) + currency;
});
