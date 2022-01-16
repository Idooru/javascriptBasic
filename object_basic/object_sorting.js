let codes = {
    // 정수 프로퍼티
    49: "독일",
    41: "스위스",
    46: "스웨덴",
    44: "영국",
    1: "미국",
};

for (let key in codes) {
    console.log(key, codes[key]); // 작은 숫자부터 오름차순으로 출력됩니다.
}

let user = {
    // 평범한 문자열 프로퍼티
    name: "John",
    surname: "Smith",
};
user.age = 25;

for (let prop in user) {
    console.log(prop); // 프로퍼티가 추가된 순서로 출력됩니다.
}

let codes2 = {
    // 정수 프로퍼티
    "+49": "독일",
    "+41": "스위스",
    "+46": "스웨덴",
    "+44": "영국",
    "+1": "미국",
};

for (let key in codes) {
    console.log(+key);
}
