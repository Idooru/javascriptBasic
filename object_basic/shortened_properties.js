function makeUser1(name, age) {
    return {
        name: name,
        age: age,
    };
}

let user1 = makeUser1("John", 30);
console.log(user1);

function makeUser2(name, age) {
    return {
        name, // 생략이 가능합니다.
        age, // 생략이 가능합니다.
    };
}

let user2 = makeUser2("Clash", 27);
console.log(user2);
