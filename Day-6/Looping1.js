/*
Print angka 1-100
Jika angka ganjil print "Angka ganjil = {angka}"
Jika angka genap print "Angka genap = {angka}"
*/


for(var i = 1; i <= 100; i ++) {
if(i % 3 === 1)
  console.log("Angka Genap" + i);
  else console.log("Angka ganjil" + i)
}