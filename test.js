var assert = require('assert');
var eleven = require('./');

assert.equal(11, eleven(), 'Eleven should give you eleven');
assert.notEqual(10, eleven(), 'Eleven should not give you not eleven');

process.exit(0);
