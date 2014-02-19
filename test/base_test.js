/**
 * Sellside
 *
 * Sellside <http://www.sellside.com>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2014 Sellside.
 * Licensed under the MIT License (MIT).
 */

var expect = require('chai').expect;
var reader = require('../');
var path = require('path');

var inspect = function(obj) {
	return require('util').inspect(obj, null, 10);
};

describe('BaseReader', function() {

  describe('constructor', function() {
  
    it('should load configuration data', function() {
    	var configFilePath = path.join(__dirname, 'fixtures/.configtestrc');
    	var base = new reader.BaseReader({ config: configFilePath });
      var expected = {
				"foo": "bar",
				"baz": [{"bang": "bing"}],
				"beep":{
					"boop": "bop"
				}
			};
      var actual = base.config;
      expect(actual).to.eql({});
    });
  
  });

});