let s = "Currency rate";
let s2 = 'Currency rate';
console.log(s);


let concatString = 'first; \t second';
let templateLiteral = `first
second`;
console.log(concatString);
console.log(templateLiteral);

let sum = 100;
let complexLiteral = `A ${'$'+ sum} is worth ${sum*20} euros`;
console.log(complexLiteral);

const ourFee = 0.01;
const competitorFee = 0.02;

console.log('Compare our fees with competition. To convert 100 USD to EUR:');

const covert = (val) => 100*val;
const message = `Us: ${'$'+covert(ourFee)} | Competitor: ${'$'+covert(competitorFee)}`;

console.log(message);