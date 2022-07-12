const _ = require("lodash");

//dodani lodash, te se moze koristiti bilo koja funkcija s _.clone()

const objectExample = {ime: "vely.digital"}

console.log("orginal", objectExample);

const lodashCloneExample = _.clone(objectExample);

console.log("clone", lodashCloneExample)