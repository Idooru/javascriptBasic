// check that the object is empty

let schedual = {};

function isEmpty(obj) {
    for (let key in obj) {
        // 루프가 시작되면 프로퍼티가 존재합니다.
        return false;
    }
    return true;
}

console.log(isEmpty(schedual));

schedual["8:30"] = "get up";

console.log(isEmpty(schedual));
