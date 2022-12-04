class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        // printSomething
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter); // printSomething(num)
        }
    }
}

// class에 우리가 원하는 기능을 다 정의하게 되면
// 사용자가 자세하게 컨트롤 불가, 재사용 어려움
// 콜백함수를 이용해서 class를 만들어 내가 하고 싶은대로 만들 수 있다

const coolCounter = new Counter(printSomething);

function printSomething(num) {
    console.log(`Wow! ${num}`);
}

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
