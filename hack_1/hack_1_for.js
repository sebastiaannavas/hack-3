/**
 * mediante el loop for agregar los valores
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
for (; idx < arrLen ; idx++) {
    result[idx] = Object.values(arr[idx])[0];
}

// Method 2
// let keys = arr.map(obj => Object.keys(obj));
// for (; idx < arrLen ; idx++) {
//     result[idx] = arr[idx][keys[idx]];
// }

// Plus: more than one key in the object.
// let newArr = [{a:1, f:8},{b:2},{c:3},{d:4},{e:5}];
// let newArrLen = newArr.length;

// for (; idx < newArrLen ; idx++){

//     for (let num in newArr[idx]){   

//         result.push(newArr[idx][num]);     
//    }
// }

//export result
module.exports = result;