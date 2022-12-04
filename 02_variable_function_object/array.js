// Q1. make a string out of an array
{
    const fruits = ["apple", "banana", "orange"];

    // A1.
    console.log(...fruits);
}

// Q2. make an array out of a string
{
    const fruits = "🍎, 🥝, 🍌, 🍒";

    // A2.
    console.log([fruits]);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];

    // A3.
    console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];

    // A4.
    let new_array = array.splice(2, 3);
    console.log(new_array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student("A", 29, true, 45),
    new Student("B", 28, false, 80),
    new Student("C", 30, true, 90),
    new Student("D", 40, false, 66),
    new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
    // A5.
    students.map((student) => {
        if (90 == student.score) console.log(student.name);
    });
}

// Q6. make an array of enrolled students
{
    // A6.
    let enrolled_students = students.filter(
        (student) => student.enrolled == true
    );
    console.log(enrolled_students);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    // A7.
    let scores = students.map((student) => student.score);
    console.log(scores);
}

// Q8. check if there is a student with the score lower than 50
{
    // A8.
    students.map((student) => {
        student.score < 50 && console.log("있습니다.");
    });
}

// Q9. compute students' average score
{
    // A9.
    let scores = students.map((student) => student.score);
    console.log(scores.reduce((a, c) => a + c));
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    // A10.
    let scores = students.map((student) => student.score);
    console.log(scores.toString());
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    let scores = students.map((student) => student.score);
    console.log(scores.sort().toString());
}
