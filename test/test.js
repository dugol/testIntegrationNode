var assert = require('assert');
var codeBreaker = require('../functionTest/codeBreaker');
var codeBreaker1 = require('../functionTest/codeBreaker1');
var numero = 0;
var app = require('../index.js');

describe('codeBreakerTest', function () {
    describe('succesfulTests', function () {
        before(function () {
            codeBreaker1.setSecret([1, 2, 3, 4]);
        });

        it('1234 return XXXX', function () {
            assert.equal(codeBreaker1.game(1234), "XXXX");
        });
        it('1243 return XX__', function () {
            assert.equal(codeBreaker1.game(1243), "XX__");
        });
        it('1243 return X___', function () {
            assert.equal(codeBreaker1.game(1342), "X___");
        });
        it('1243 return X___', function () {
            assert.equal(codeBreaker1.game(1324), "XX__");
        });
        it('5678 return ', function () {
            assert.equal(codeBreaker1.game(5678), "");
        });
        it('1578 return ', function () {
            assert.equal(codeBreaker1.game(1578), "X");
        });
        it('1578 return ', function () {
            assert.equal(codeBreaker1.game(1578), "X");
        });

    });
});
/*
describe('codeBreakerAPITest', function () {
    before(function () {
        codeBreaker1.setSecret([1, 2, 3, 4]);
    });
    it('todos iguales', (done) => {
		chai.request(app)
			.get('/api/codebreaker/1234')
			.end( function(err,res){
				//console.log("res: "+res.body)
                expect(res.body).to.have.property('resultado').to.be.equal("xxxx");
                expect(res).to.have.status(200);                
				done();
			});
    });

});

*/

