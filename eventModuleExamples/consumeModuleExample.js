/*---------------
    Example #1 import as following
    const myModule = require("./exportingModuleExample")
----------------*/

const myModule = require("./exportingModuleExample");

console.log(myModule.authorName);

console.log(myModule.inc());
console.log(myModule.inc());
console.log(myModule.getCount());

console.log(myModule.dec());
console.log(myModule.getCount());

console.log(myModule.booleanExample);

/*---------------
    Example #2 import as following
    const {inc, getCount} = require("./exportingModuleExample")
----------------*/

const {inc, getCount} = require("./exportingModuleExample");

inc();
inc();

console.log(`The total count is ${getCount()}`);
