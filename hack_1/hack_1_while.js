/**
* mediante el loop while agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [1,2,3,4,5]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];

let idx = 0, arrLen = arr.length;

// Method 1
while (idx < arrLen) {
    result[idx] = Object.values(arr[idx])[0];
    idx++;
}

// Plus: more than one key in the object.
// let newArr = [{a:1, f:8},{b:2},{c:3},{d:4},{e:5}];
// let newArrLen = newArr.length;

// while (idx < newArrLen){
//     let newArrKeys = Object.keys(newArr[idx]);
//     newArrKeys.map(key => result.push(newArr[idx][key]));
//     idx++;
// }

//export result
module.exports = result;