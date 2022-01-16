let user = {};

console.log(user.noSuchProperty === undefined); // true는 'property가 존재하지 않음'을 나타냅니다.

user = {
    name: "John",
    age: 30,
};

console.log("age" in user); // "in" 키워드로 프로퍼티가 존재하는지 확인 할 수 있습니다. boolean을 리턴합니다.
console.log("blabla" in user);

user = { age: 30 };
let key = "age";

console.log(key in user);

let obj = {
    test: undefined,
};

console.log(obj.test); // 값만 'undefined' 이지 값 자체가 'undefined'는 아닙니다.
console.log(obj);

console.log("test" in obj); // "test"프로퍼티가 있는지 확인해보면 true가 나옵니다.
