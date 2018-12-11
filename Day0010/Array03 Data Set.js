/* Latihan 3
Diberikan sebuah function numberProcessing(numberArr) yang
menerima satu parameter berupa array yang berisikan angka.
Tentukan nilai minimum, maksimum, rata-rata (genapkan ke
bilangan terdekat), bilangan ganjil dan bilangan genap. */

function numberProcessing(numberArr) {
  // Max
  var min = 0, max = 0;
  for (var i = 0; i < numberArr.length; i++)
    if (numberArr[i] >= max) {
      max = numberArr[i];
    }
  var hasilMax = [], hasilMax = max;

  // Min
  for (var j = 0; j < numberArr.length; j++)
    if (numberArr[j] <= min) {
      min = numberArr[j];
    }
  var hasilMin = [], hasilMin = min;

  // sum for Mean
  var sum = numberArr.reduce(function (a, b) {
    return a + b;
  });

  var divide = sum / numberArr.length;
  var mean = Math.round(divide);

  // sort for Manage Odds & Evens

  var pecah = numberArr.slice();
  var sorting = pecah.sort(function (a, b) {
    return a - b;
  });

  // Odds & Evens
  var odds = [], evens = [],
    tampEvens, tampOdds;
  for (i = 0; i < numberArr.length; i++) {
    if (numberArr[i] % 2 === 0) {
      tampEvens = numberArr[i];
      evens.push(tampEvens);
    } else {
      tampOdds = numberArr[i];
      odds.push(tampOdds);
    }
  }

  // return
  return "Min: " + hasilMin+ ", " + "Max: " + hasilMax + ", " + "Mean: " + mean + "," + " Odds: " + odds + ", " + "Evens: " + evens;

}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"