let user = {};

// 문법 에러가 발생합니다.
// user.likes bird = true;

// set
user["likes birds"] = true;

// get
console.log(user["likes birds"]);

// delete
delete user["likes birds"];

console.log(user["likes birds"]); // 삭제되서 존재하지 않습니다.

let key = "likse birds";

user[key] = true; // user["likse birds"] = true; 와 같습니다.
console.log(user);

user = {
    name: "John",
    age: 30,
};

key = "name";
console.log(user.key); // 메서드 표기법은 불가능합니다.
