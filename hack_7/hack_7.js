/**
* agregar los skills del objeto foo al array result,
* mediante la funcion map
*
* output => ["javascript", "html", "css", "python", "flask", "react", "redux"]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin",
    skills:["javascript", "html", "css", "python", "flask", "react", "redux"]
};
let result = [];

// Method 1
let fooValues = Object.values(foo);
fooValues.map(value => {if (typeof(value) == "object") { value.map(item => result.push(item)); } });

// Method 2
// let fooKeys = Object.keys(foo);
// let idx = 0, fooKeysLen = fooKeys.length;
// for (; idx < fooKeysLen ; idx++) {
//     if (fooKeys[idx] == "skills") { result = foo[fooKeys[idx]].map(item => item)}
// }

// Method 3
// if(foo.hasOwnProperty("skills")){ result = foo.skills.map(item => item); }

console.log(result);

//export result
module.exports = result;