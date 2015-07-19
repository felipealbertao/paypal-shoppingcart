'use strict';
var express = require('express'),
	paypal = require('paypal-rest-sdk'),
	db = require('../lib/database'),
	pine = require('pine');


module.exports = function spec() {

	return {
		onconfig: function(config, next) {

			//configure mongodb and paypal sdk
			db.config(config.get('databaseConfig'));
			paypal.configure(config.get('paypalConfig'));


			pine.configure({
				basedir: __dirname,
				levels: undefined,
				colors: undefined,
				transports: {
					console: {
						level: 'debug',
                        json: false
					},
					file: {
						level: 'debug',
                        json: false,
						filename: 'paypal.log'
					}
				},
				exceptionHandlers: undefined
			});


			next(null, config);
		}
	};

};
