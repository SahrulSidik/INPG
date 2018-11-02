/*
  Print angka 3 - 30
  Jika angka habis dibagi 3 prit "HACK" = {angka}"
  Jika angka habis dibagi 6 print "FOX" = {angka}"
  Jika angka habis dibagi 15 print "HACKFOX" = {angka}"
*/


var i = 30;

for(i = 3; i <= 30; i+=3){  
if (i % 15 === 0){
  console.log('HACKFOX = ' + i);
} else if (i % 6 === 0){
  console.log('FOX = ' + i);
} else{
  console.log('HACK = ' + i);
  }
}
