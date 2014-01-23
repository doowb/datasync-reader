/**
 * Sellside
 *
 * Sellside <http://www.sellside.com>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2014 Sellside.
 * Licensed under the MIT License (MIT).
 */

var _ = require('lodash');
var datasync = require('datasync');

var BaseReader = module.exports = function(options) {
	
	this.options = _.extend({}, options || {});
	this.config = this.loadConfig(this.options.config);
};

BaseReader.prototype.loadConfig = function(configPath) {
	return datasync.config.load(configPath);
};