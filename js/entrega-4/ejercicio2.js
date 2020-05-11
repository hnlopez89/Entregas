let ammountInEuros = 45;

fetch("https://api.exchangerate-api.com/v4/latest/EUR").then((response) => {
  return response.json().then((rates) => {
    let ammountInDolars = ammountInEuros * rates.rates.USD;
    let ammountInYen = ammountInDolars * rates.rates.JPY;
    console.log(ammountInEuros + " euros son " + ammountInDolars + " dólares");
    console.log(ammountInDolars + " dólares son " + ammountInYen + " yenes");
  });
});
