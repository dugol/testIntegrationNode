var assert = require('assert');
var codeBreaker = require('../functionTest/codeBreaker');
var numero = 0;
describe('codeBreakerTest',function(){
    describe('succesfulTests', function(){
        before(function () {
            
        });

        it('1234 return XXXX', function(){
            assert.equal(codeBreaker.game(1234),"XXXX");
        });
        it('1243 return XX__', function(){
            assert.equal(codeBreaker.game(1243),"XX__");
        });
        it('1243 return X___', function(){
            assert.equal(codeBreaker.game(1342),"X___");
        });
        it('1243 return X___', function(){
            assert.equal(codeBreaker.game(1324),"XX__");
        });
        it('5678 return ', function(){
            assert.equal(codeBreaker.game(5678),"");
        });
        it('1578 return ', function(){
            assert.equal(codeBreaker.game(1578),"X");
        });
        it('1578 return ', function(){
            assert.equal(codeBreaker.game(1578),"X");
        });
        
    });            
});


