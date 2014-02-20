var test = require('tape');
var toISODate = require('./toISODate');

test('toISODate should take a native Date object, and return a string formatted "YYYY-MM-DD"', testCase1);

function testCase1(t) {
	t.plan(1);
	t.equal(toISODate(new Date(1990,0,1)), '1990-01-01');
}
