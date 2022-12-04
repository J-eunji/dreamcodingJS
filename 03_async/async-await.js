// async & await

// 1. async
// 함수 앞에 쓰면 Promise가 된다.
async function fetchUser() {
    return "kaka";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
async function getPizza() {
    await delay(1000);
    return "🍕";
}

async function getPotato() {
    await delay(2000);
    return "🍟";
}

// 모든 Promise 한번에 Promise.all
function pickAllFood() {
    return Promise.all([getPizza(), getPotato()]).then((food) =>
        food.join(" + ")
    );
}
pickAllFood().then(console.log);

// function pickOnlyOne() {
//     return Promise.race([getPizza(), getPotato()]);
// }

// pickOnlyOne().then(console.log);
