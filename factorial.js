// // Ampaire Irene
// // Atim Monica

function factorial (number){

    if (typeof number !== 'number' || isNaN(number)) {
        return undefined;
    }
// checking if number is negative
if (number < 0) {
    return undefined;
    
}

// if number is 0
else if (number === 0) {
    return 1;
}

// if number is positive
else {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    return fact;
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

