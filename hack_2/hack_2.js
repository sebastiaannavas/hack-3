/**
* mediante el loop for agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [2,3,4]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];

let idx = 1, arrLen = arr.length;
for (; idx < arrLen ; idx++) {
    if (idx != (arrLen - 1)) { result.push(Object.values(arr[idx])[0]) }
}
 
//export result
module.exports = result;