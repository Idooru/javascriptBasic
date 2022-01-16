let user = {
    name: "John", // 키: "name", 값: "John"
    age: 30, // 키: "age", 값: 30
};

console.log(user.name);
console.log(user.age);

user.isAdmin = true;
console.log(user);

delete user.isAdmin;
console.log(user);

user = {
    name: "John",
    age: 30,
    "likes birds": true, // 복수의 단어는 따옴표로 묶어야 합니다.
};

console.log(user);

const user2 = {
    // const로 선언된 객체는 수정이 가능합니다.
    name: "John",
};

console.log(user2.name);

user2.name = "pete";
console.log(user2.name);
