"use strict";
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error("age can not be negative");
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User("kaka", "jung", -1);
console.log(user1.age);

class Phone {
    // 인스턴스 값 초기화
    // 초기화할 값이 없다면 생략 가능
    //
    // 클래스를 호출할 때 전달되는 인자를 constructor 함수의 매개변수로 받음
    constructor(name, color) {
        // "Galaxy s22", "white"
        this.name = name;
        this.color = color;
    }
    // 축약형: function 키워드 생략
    // 프로토타입 메서드가 됨
    powerOn() {
        console.log("전원이 켜졌습니다.");
    }
    //
    // 정적(static) 메서드
    // 생성자를 통해서만 호출 가능
    static powerOff() {
        console.log("전원이 꺼졌습니다.");
    }
}
//
let galaxy = new Phone("Galaxy s22", "white");
console.log(galaxy);
galaxy.powerOn(); //
Phone.powerOff();
