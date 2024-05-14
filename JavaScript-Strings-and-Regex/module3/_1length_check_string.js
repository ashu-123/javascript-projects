console.log("ab".length);

function isString(str) {
    return typeof str === 'string' || String.prototype.isPrototypeOf(str);
}

function isEmpty(str) {
        if(!isString(str)) return true;
        return str.length === 0;
}

// console.log(isEmpty(null));
// console.log(isEmpty(undefined));
// console.log(isEmpty(""));
// console.log(isEmpty(new String("")));
// console.log(isEmpty(' '));
// console.log(isEmpty('A'));
// console.log(isEmpty(new String('a')));


function isBlank(str) {
    return (!str || str.trim().length === 0);
}

// console.log(isBlank(null));
// console.log(isBlank(undefined));
// console.log(isBlank(""));
// console.log(isBlank(new String("")));
// console.log(isBlank(' '));
// console.log(isBlank('\t'));
// console.log(isBlank('\n'));
// console.log(isBlank('A'));

function isEqualIgnoreDiacritic(str1, str2) {
    return (str1.localeCompare(str2, 'de', {sensitivity: 'case'})===0);
}

console.log(isEqualIgnoreDiacritic('cafe', 'café'));
console.log(isEqualIgnoreDiacritic('reserve', 'réserve'));

// function isString(str) {
//     return (typeof str === 'string' || String.prototype.isPrototypeOf(str));
// }

console.log(isString('a'));
console.log(isString(new String('a')));
console.log(isString(34));

let numArray = ['1-Apple', '2-Mangoes', '11-Banana', '18-Guava'];

numArray.sort((a, b) => a.localeCompare(b, undefined, {numeric: true}));
console.log(numArray);

console.log('11' + 1);
console.log('11' - 1);