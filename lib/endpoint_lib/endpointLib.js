/**
 * EndPointLib Module.
 * @fileoverview EndPointLib module that obtains URI.
 * @author  Aldo.Balderrama@fundacion-jala.org (Miguel Aldo Balderrama)
 * @version 1.0.0
 * @module endPoint_lib/endpointLib
 */

var requireManager = require('../manager_lib/requireManagerLib.js');
var config = requireManager.getRequireConfig();

/**
 * Get URI, to take an action on the resource.
 * @param {String} endPoint Endpoint.
 * @return {String} URI Return URI.
 */
module.exports.getUri = function (endPoint) {
  return config.protocol + '://' + config.server + ':' + config.port + endPoint;
};
