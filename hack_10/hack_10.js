/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
let result;

result = {...foo};
delete result.alias;

let keys = Object.keys(result);
let idx = 0, keyLen = keys.length;

for (; idx < keyLen ; idx++) {
    switch ( keys[idx] ) {
        case "name": 
            result[keys[idx]] = `${
                result[keys[idx]].charAt(0).toUpperCase()
            }${ result[keys[idx]].slice(1, result.name.length) }`;
            break;
        case "roles":
            result[keys[idx]].push(roleSuperUser, roleUser);
            result[keys[idx]] = result[keys[idx]].map(role => role.toUpperCase());
            break;
        case "skills":  
            result[keys[idx]].unshift(skills[0], skills[1]);  
            let propLen = result[keys[idx]].length;
            result[keys[idx]] = [
                ...result[keys[idx]].slice(0, Math.round(propLen / 2)), skills[skills.length - 2], 
                ...result[keys[idx]].slice(Math.round(propLen / 2), propLen), skills[skills.length - 1]
            ];
            result[keys[idx]] = result[keys[idx]].map( skill => 
                skill == "html" || skill == "css"
                ? skill.toUpperCase()
                : `${skill.charAt(0).toUpperCase()}${skill.slice(1, skill.length)}` );
            break;
    }
}

result.levels = levels = levels.map(obj => {
    let keys = Object.keys(obj);
    keys.map(key => obj[key] = obj[key].split("-").join('').toUpperCase());
    return obj;
});

//export result
module.exports = result; 