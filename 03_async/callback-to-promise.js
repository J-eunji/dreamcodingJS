// 콜백지옥해결!

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === "kaka" && password === "dream") ||
                    (id === "coder" && password === "academy")
                ) {
                    resolve(id);
                } else {
                    reject(new Error("not Found"));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === "kaka") {
                    resolve({ name: "kaka", role: "admin" });
                } else {
                    reject(new Error("no access"));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);
