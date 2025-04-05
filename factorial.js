// // Ampaire Irene
// // Atim Monica

function factorial (number){

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}
}

// Ampaire Irene
// Atim Monica

// factorial using recursion(function calling a function)
// function factorial(n){
//     if (n==0)
//         {
//             console.log(`The factorial of ${number} is 1.`);
//             }
            
//     else {
//         let fact = n*factorial(n-1);

// console.log(`The factorial of ${number} is ${fact}.`);
// } ;

// }
export default factorial;