
console.log("Classic loop");
for (let step = 0; step <= 4; step++) {
    console.log('Walking east one step: ' + step);
}

const map = new Map([
    [1, 'one'],
    [2, 'two']
]);

for(let entry of map) {
    console.log(entry);
    console.log(`${entry.at(0)} - ${entry[1]}`);
}

for(const key of map.keys()) {
    console.log(key);
}

for(const val of map.values()) {
    console.log(val);
}

['Apple', 'Google', 'Microsoft'].forEach((val, index) => console.log(`${val} - ${index}`));

let sparseArr = [1, 2, 3, 4, 5];
sparseArr[10] = 10;

sparseArr.forEach((val, i) => console.log(val + " " + i));

console.log(sparseArr);

// for(const num of sparseArr) {
//     if(num==2) continue;
//     console.log(num);
// }

// for(let i=0;i<sparseArr.length;i++) {
//     console.log(sparseArr[i]);
// }