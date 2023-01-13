let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;

module.exports = {
    booleanExample: true,
    authorName: "Itzel",
    count,
    inc,
    dec,
    getCount,
}

/* WHY USE MODULES? Modules allows the code to be re-usable
and consumable, because we can publish our own modules to 
NPM and share them with the rest of the community.
*/