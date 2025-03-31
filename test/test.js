import {assert} from "chai";
import multiply from "../multiply.js";
import {describe, it} from "node:test";

describe('multiplication test', function(){
    
    it('check that the product of 1 and 1 is 1', function (){
         // inside here assert is used
         assert.equal(multiply(1,1), 1);

    });
    
   })

