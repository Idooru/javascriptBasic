// find out that sum of property

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;
for (let money in salaries) {
    sum += salaries[money];
}

console.log(sum);
