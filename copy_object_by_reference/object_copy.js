let user = {
    name: "John",
    age: 30,
};

let clone = {}; // 새로운 빈 객체

// 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
for (let key in user) {
    clone[key] = user[key];
}

// 이제 clone은 완전히 독립적인 복제본이 되었습니다.
clone.name = "Pete";

console.log(clone.name); // Pete
console.log(user.name); // John

user = {
    name: "John",
};

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2); // permission1과 permission2의 프로퍼티를 user로 복사합니다.

user = {
    name: "John",
};

Object.assign(user, { name: "Pete" }); // 동일한 이름을 가지는 프로퍼티가 있으면 기존 값이 덮어씌워 집니다.
console.log(user); // { name: "Pete" }

user = {
    name: "John",
    age: 30,
};

clone = Object.assign({}, user);
console.log(clone); // { name: 'John', age: 30 }
