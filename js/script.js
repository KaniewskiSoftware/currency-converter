{
  const init = () => {
    const calculator = document.querySelector(".js-calculator");
    calculator.addEventListener("input", handleRate);
  };

  const handleResult = (rate, currency) => {
    const jsResult = document.querySelector(".js-result");
    const jsAmount = document.querySelector(".js-amount");
    jsResult.innerText = jsAmount.value * rate.toFixed(2) + currency;
  };

  const handleRate = () => {
    const jsStartCurrency = document.querySelector(".js-startCurrency");
    const jsEndCurrency = document.querySelector(".js-endCurrency");
    const currency = jsEndCurrency.options[jsEndCurrency.selectedIndex].text;
    let rate;

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
        break;
    }
    handleResult(rate, currency);
  };

  init();
}
