/**
 * Logger Module.
 *
 * @fileoverview Logger module, responsible for saving the logs of the application.
 * @author  Aldo.Balderrama@fundacion-jala.org (Miguel Aldo Balderrama)
 * @version 1.0.0
 * @module logger_lib/logger
 */

var log4js = require('log4js');
var config = require('../resources/logger.json');

/**
 * configure the logger object file attributes logger.json.
 */
log4js.configure(config.logger);

/**
 * log4js object
 */
module.exports = log4js;
