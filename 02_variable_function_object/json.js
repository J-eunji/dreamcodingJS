// JSON
// JavaScript Object Notation

// 1. Object to JSON
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const dog = {
    name: "kaka",
    color: "white",
    size: null,
    birthDate: new Date(),
    bark: () => {
        console.log(`${name} can bark!`);
    },
};

// 원하는 데이터만 골라 보내기
json = JSON.stringify(dog, ["name", "color"]);
console.log(json);

// 데이터를 세밀하게 통제하고 싶을 때 콜백함수 이용
json = JSON.stringify(dog, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === "name" ? "kkamji" : value;
});
console.log(json);

// 2. JSON to Object
json = JSON.stringify(dog);
const obj = JSON.parse(json);
console.log(obj);
