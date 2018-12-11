/* latihan 1 
Diberikan sebuah function yang menerima parameter berupa array, buatlah sebuah program JavaScript untuk grouping score yang lulus dan yang gagal. (Gagal jika score < 75) */

function grouping (scores) {
    var pass = [];
    var fail = [];
    for(var i = 0; i <scores.length; i++) {
      if (scores[i] < 75 ) {
        fail.push(scores[i]);
      } else if(scores[i] >= 75) {
        pass.push(scores[i]);
      }

    }
    var hasil = {};
      hasil["fail"] = fail
      hasil["pass"] = pass
      return (hasil);
}

console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30]));
// { pass: [ 80, 90, 100, 85 ], fail: [ 45, 65, 74, 30 ] }

console.log(grouping([70, 56, 25, 70, 73, 86, 87]));
// { pass: [], fail: [] }

