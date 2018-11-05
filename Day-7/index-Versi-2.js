var name = "Sahrul Sidik";
var age = 30;
var money = 30000

if (name) {
  if (age < 17) {
    var hargaJuice = 50000
    if (money > hargaJuice) {
      console.log("sisa juice = " + (money - hargaJuice))
    } else {
      console.log("uang anda tidak cukup untuk membeli juice")
    }
  } else {
    var hargawine = 300000
    if (money > hargawine) {
      console.log("sisa wine = " + (money - hargawine))
    } else {
      console.log("uang anda tidak cukup untuk membeli wine")
    }
  }
} else {
  console.log("no name")
}
