const kaka = { name: "kaka", age: 9 };
console.log(kaka.name); //코딩하는 순간!!
console.log(kaka["name"]); //어떤키가 필요한지 모를때, 런타임에서 결정될 때

function printValue(obj, key) {
    console.log("print", obj.key);
}

printValue(kaka, "name");

for (key in kaka) {
    console.log(key);
}

for (key of kaka) {
    console.log(key);
}
