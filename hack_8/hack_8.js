/**
* agregar las propiedades del objeto foo al array result, 
* cada propiedad dentro de un array, con 2 items, 
* que se representa con la clave y el valor
* debes utilizar for ó while
*
* 
* output => [["id",100], ["name","foo"], ["role","admin"]]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin"
};
let result = [];

let keys = Object.keys(foo);
let values = Object.values(foo);
let idx = 0, keysLen = keys.length;

for (; idx < keysLen ; idx++) {
    // Method 1
    result[idx] = [];
    result[idx].push(keys[idx], values[idx]);
    // Method 2
    // result[idx] = new Array(keys[idx], values[idx]);
    // Method 3
    // result[idx] = [keys[idx], values[idx]];
}

//export result
module.exports = result; 