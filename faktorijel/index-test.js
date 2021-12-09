var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
      it('it will test if output od 5 is equal  to 120',()=>{
       //setup
       const expected=120;
       const value=5;
       //exercise
        
        const actual= Calculate.factorial(value);
      // verify
        assert.equal(actual,expected);
      })

          it('it will test if output od 3 is equal  to 6',()=>{
       //setup
        const expected=6;
       const value=3;
       //exercise
        
        const actual= Calculate.factorial(value);
      // verify
        assert.equal(actual,expected);
      })

      
      it('it will test if output 0 is equal  to 1',()=>{
       //setup
       const expected=1;
       const value=0;
       //exercise
        
        const actual= Calculate.factorial(value);
      // verify
        assert.equal(actual,expected);
      })
  });
});