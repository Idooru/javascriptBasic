// 예약어를 키로 사용해도 괜찮습니다.
let obj = {
    for: 1,
    let: 2,
    return: 3,
};

console.log(obj.for + obj.let + obj.return);

obj = {
    0: "test with 0", // "0": "test"와 동일합니다.
    1: "test with 1",
};

console.log(obj["0"]);
console.log(obj[0]);

console.log(obj["1"]);
console.log(obj[1]);
