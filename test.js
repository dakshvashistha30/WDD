// calculate square using functions 
// function square(num) {
//    return num * num;
// }
// let number = 5;
//  result = square(number);
// console.log("Square =", result);


// function checkEvenOdd(num) {
//     if (num % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// let number = 7;
// console.log(checkEvenOdd(number));


// function areaOfCircle(radius) {
//     return Math.PI * radius * radius;
// }
// let radius = 5;
// let area = areaOfCircle(radius);
// console.log("Area of Circle =", area);


// function areaOfRectangle(length, width) {
//     return length * width;
// }
// let length = 10;
// let width = 5;
// let area = areaOfRectangle(length, width);
// console.log("Area of Rectangle =", area);



// function grade(marks){
//     if( marks >=90) return "A";
//     if( 80 <= marks <90) return "B";
//     if( 70 <= marks <80) return "c";
//     return "f";
// }
// console.log(grade(75));


function factorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));
