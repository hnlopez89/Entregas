let ammountInEuros = 45;

fetch("https://api.exchangerate-api.com/v4/latest/EUR").then((response) => {
  return response.json().then((rates) => {
    let ammountInDolars = ammountInEuros * rates.rates.USD;
    console.log(ammountInEuros + " euros son " + ammountInDolars + " dólares");
    return fetch("https://api.exchangerate-api.com/v4/latest/USD").then(
      (response) => {
        return response.json().then((rates) => {
          let ammountInYen = ammountInDolars * rates.rates.JPY;
          console.log(
            ammountInDolars + " euros son " + ammountInYen + " dólares"
          );
        });
      }
    );
  });
});
