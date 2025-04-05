// import {assert} from "chai";
// import multiply from "../multiply.js";
// import {describe, it} from "mocha";

// describe('multiplication test 1', function(){
    
//     it('check that the product of 1 and 1 is 1', function (){
//          // inside here assert is used
//          assert.equal(multiply(1,1), 1);

//     });
    
//      it('check that the product of 2 and 2 is 4', function (){
//           // inside here assert is used
//           assert.equal(multiply(2,2), 4);
 
//      });
     
   
//      it('check that the product of 3 and 3 is 9', function (){
//           // inside here assert is used
//           assert.equal(multiply(3,3), 9);
   
//      });


//      it('check that the product of 4 and 4 is 16', function (){
//           // inside here assert is used
//           assert.equal(multiply(4,4), 16);
     
//      });

 
//      it('check that the product of 23 and 45 is 23*45', function (){
//           // inside here assert is used
//           assert.equal(multiply(23,45), 23*45);
     
//      });
//    })

// Ampaire Irene
// Atim Monica
//    import {assert} from "chai";
//    import factorial from "../factorial.js";
//    import {describe, it} from "mocha";


// describe('Factorial Function', function() {
//     it('should return 24 for factorial of 4', function() {
//         const result = factorial(4);
//         assert.strictEqual(result, 24);
//     });

//     it('should return 3628800 for factorial of 10', function() {
//         const result = factorial(10);
//         assert.strictEqual(result, 3628800);
//     });

//     it('should return 1 for factorial of 0', function() {
//         const result = factorial(0);
//         assert.strictEqual(result, 1);
//     });

//     it('should return undefined for negative numbers', function() {
//         const result = factorial(-1);
//         assert.strictEqual(result, undefined);
//     });
// });

  


   //   Ampaire Irene
   //   Atim Monica
        import {assert} from "chai";
        import fibonacci from "../fibonacci.js";
        import {describe, it} from "mocha";
        
        describe('fibonacci of a number', function(){
            
            it('check that the fibonacci of 4 is [0, 1, 1, 2]', function (){
               const expected = [0, 1, 1, 2];
               const actual = fibonacci(4);
               assert.deepStrictEqual(actual, expected); // Use deepStrictEqual for array comparison
          
            });
          })
     