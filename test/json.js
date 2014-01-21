'use strict';

var json = require('../');
var assert = require('assert');

assert.equal(typeof json.stringify, 'function');
assert.equal(typeof json.parse, 'function');