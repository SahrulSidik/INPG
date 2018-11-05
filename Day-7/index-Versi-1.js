var name = "Sahrul Sidik";
var age = 16;
var money = 520000;
if (name === "") {
  console.log("Anda tidak boleh masuk!")
} else if (age < 17) {
  if (money < 50000) {
    console.log("uang kurang")
  } else {
    money -= 50000
    console.log("kembali " + money)
  }
} else if (age > 17) {
  if (money < 300000) {
    console.log("uang kurang")
  } else {
    money -= 300000
    console.log("kembali " + money)
  }
}
