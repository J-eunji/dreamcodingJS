// 1.Producer
// promise 만드는 순간 executor 자동 실행
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log("doing something...");
    setTimeout(() => {
        resolve("kaka");
        // reject(new Error("no network"));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then((value) => {
        // then: 정상적
        console.log(value);
    })
    .catch((error) => {
        // catch: 에러 처리
        console.log(error);
    })
    .finally(() => {
        // finally: 마지막으로 무조건 실행
        console.log("finally");
    });

// 3. Promis chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then((num) => num * 2)
    .then((num) => num * 3)
    .then((num) => {
        // then은 값을 바로, or Promise를 전달할 수도 있음
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then((num) => console.log(num));

// 4. Error Handling
const getHenS = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("🐓"), 1000);
    });
const getEggS = (hen) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    });
const cookS = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHenS()
    .then((hen) => getEggS(hen))
    .then((egg) => cookS(egg))
    .then((meal) => console.log(meal));

getHenS().then(getEggS).then(cookS).then(console.log);

const getEggJ = (hen) =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });

getHenS()
    .then(getEggJ) // 에러나면
    .catch((error) => {
        return "🥨"; // 바로 에러처리
    })
    .then(cookS)
    .then(console.log)
    .catch(console.log);
