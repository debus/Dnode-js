//exports.metadata 	= require('./metadata.json');

var http 			= require("http");
var ac				= require('ac');
var router 			= require('default_router');
var config_funcs 	= require('configuration');
//http://www.nodebeginner.org/#a-word-of-warning

var zcache = {'':'', '':''};

var configuration = {
	'port'		: 	80,
	'ac'		: 	ac,
	'caching'	: 	true,
	'logging'	: 	true,
	'router' 	: 	router, 
};
exports.configuration = configuration;


exports.get = function(condition, callback, extended_options){
	return configuration.router.get(condition, callback, extended_options);
};

exports.post = function(condition, callback, extended_options){
	return configuration.router.post(condition, callback, extended_options);
};

exports.status = function(code, callback, extended_options){
	return configuration.router.status(condition, callback, extended_options);
};

exports.startServer = function(){
	config_funcs.alterConfig(configuration.router.configuration, configuration);
	http.createServer(configuration.router.requestHandler).listen(exports.configuration['port']);
	console.log("DNode server started with the following configuration:");
	console.log(exports.configuration);
};
