// 1. Use strict
"use strict";

// 2. Variable
// let

//grobal Scope
let globalName = "global name";

// block Scope
{
    let name = "eunji";
    console.log(name);
    name = "hello";
    console.log(name);
}

console.log(name);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;

// bitInt Chrome, firefox
const bigInt = 124564897489416548654896415231864684561641484n;

// symbole, create unique identifiers for objects
// symbol.description => console 시 유의
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
// symbol1 !== symbol2

const gSymbol1 = Symbol.for("id");
const gSymbole2 = Symbol.for("id");
// gSymbol1 === gSymbol2

let text = "hello";
console.log(typeof text);

text = 7 + "5";
console.log(text);

// Q1. iterrate from 0 to 10 print only even numbers (use continue);
for (let i = 0; i <= 10; i++) {
    if (0 !== i % 2) {
        continue;
    }
    console.log(`짝수: ${i}`);
}

// Q2. iterate from 0 to 10 and print number until reaching 8 (use break)
for (let i = 0; i <= 10; i++) {
    if (i > 8) break;
    console.log(`8까지: ${i}`);
}

function showMessage(message, from = "korea") {
    console.log(`${message} by ${from}`);
}
showMessage("Hi!"); // from parameter가 지정되어있지 않다.

function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

printAll("eunji", "kaka", "kkamji");

// Fun quiz
// function calculate(command, a, b)
// command: add, substract, devide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case "add":
            return a + b;
        case "sub":
            return a - b;
        case "devide":
            return a / b;
        case "multiply":
            return a * b;
        case "remainder":
            return a % b;
        default:
            return "command가 존재하지 않습니다.";
    }
}

console.log(calculate("add", 1, 5));
