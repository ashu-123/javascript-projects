const regex = /reg/;

const str = 'regeme___regeme';

console.log(regex.test(str));
console.log(str.search(regex));
console.log(str.replace(regex, '#'));
console.log(str.replace(/reg/g, '#'));
// console.log(str.match(regex).indexOf);

const input = 'Hi    there!!';

function checkForTypos(str) {
    let excessSpaces = str.match(/\s\s+/g);
    if(excessSpaces !== null) {
        console.log(excessSpaces.length);
    }

    let spaceBeforePunctuation = str.match(/\s(\?|,|!)/g);
    if(spaceBeforePunctuation != null) {
        console.log(spaceBeforePunctuation.length);
    }
}

console.log(checkForTypos(input));