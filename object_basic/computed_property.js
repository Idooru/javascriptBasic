let fruit = "apple";

let bag = {
    [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아옵니다.
};
console.log(bag);

bag[fruit] = 5;
console.log(bag);

bag = {
    [fruit + "Computer"]: 5, // bag.appleComputer = 5
};
console.log(bag);
