/**
* mediante el loop while agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [1,3,5]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];

let idx = 0, arrLen = arr.length;
while (idx < arrLen) {
    if ( !(idx % 2) ) { result.push(Object.values(arr[idx])[0]) }
    idx++;
}
 
//export result
module.exports = result; 