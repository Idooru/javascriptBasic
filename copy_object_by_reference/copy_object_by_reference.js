let message = "Hello!";
let phrase = message;

let user = {
    name: "John",
};

let admin = user; // 참조값을 복사합니다.

admin.name = "Pete";

console.log(user.name); // "Pete"가 출력됩니다.

/* 참조는 바로가기 만들기와 같습니다. 바로가기 만들기는 원본 파일을 가리킬 뿐. 원본 파일을 복제한게 아닙니다.
따라서 바로가기 파일에서 값을 바꾸면 원본 파일도 변경이 동시에 이루어집니다. 출처 : https://eboong.tistory.com/243 */
