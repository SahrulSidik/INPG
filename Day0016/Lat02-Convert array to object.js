/* Latihan 2
Diberikan sebuah function yang menerima parameter array multidimensi, buatlah sebuah program JavaScript untuk mengubah input menjadi format array of objects seperti di contoh.*/

function convert (arrMltD) {
   for(var indx=0; indx<arrMltD.length; indx++){
        tampungkeObj = {};
        tampungkeObj["id"] = arrMltD[indx][0]
        tampungkeObj["firsname"] = arrMltD[indx][1]
        tampungkeObj["lasname"] = arrMltD[indx][2]
        tampungkeObj["email"] = arrMltD[indx][3]
        arrMltD[indx] = tampungkeObj
   }
  return arrMltD;

}

// TEST CASES
console.log(convert([
  [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
  [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
]));
