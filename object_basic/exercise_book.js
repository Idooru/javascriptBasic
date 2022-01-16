// let user1 = new Object();

// user1.name = "John";
// user1.age = 30;
// console.log(user1);

// let user2 = {};

// user2["name"] = "Clash";
// user2["age"] = 27;
// console.log(user2);

// let key_name = "name";
// let key_age = "age";
// let key_dummy = "dummy";

// console.log(user1[key_name]);
// console.log(user2[key_age]);

// let user3 = {
//     [key_name]: "Idooru",
//     [key_age]: 25,
//     [key_dummy]: "dummy",
// };

// console.log(user3);

// delete user3[key_dummy];

// console.log(user3);

// const relationship1 = {
//     name: "zero",
//     friends: ["nero", "hero", "xero"],
//     logFriends() {
//         this.friends.forEach(() => {
//             console.log(this.name, this.friends);
//         });
//     },
// };

// relationship1.logFriends();

// class Relationship {
//     constructor(name, friends) {
//         if (typeof friends === Array) {
//             this.name = name;
//             this.friends = friends;
//         }
//         // console.log(`${this.friends}는 Array타입이 아닙니다.`);
//     }
// }

// const name = "zero";
// const friends = ["nero", "hero", "xero"];

// const man1 = new Relationship("zero", friends);
// console.log(man1);

// class UserMake {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const man2 = new UserMake("John", 30);
// console.log(man2);

// const relationship1 = {
//     name: "zero",
//     friends: ["nero", "hero", "xero"],
//     logFriends() {
//         this.friends.forEach(() => {
//             console.log(this.name, this.friends);
//         });
//     },
// };

// relationship1.logFriends();

// const relationship2 = {
//     name: "zero",
//     friends: ["nero", "hero", "xero"],
//     logFriends() {
//         const that = this;
//         that.friends.forEach(function () {
//             console.log(that.name, that.friends);
//         });
//     },
// };

// relationship2.logFriends();

class Human {
    constructor(type = "human") {
        this.type = type;
    }

    static isHuman(human) {
        return human instanceof Human;
    }

    breathe() {
        console.log("h-a-a-a-m");
    }
}

class Zero extends Human {
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        super.breathe();
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero("human", "zero", "cho");
console.log(Human.isHuman(newZero));
newZero.sayName();
