/**
 * RequestManager Module.
 *
 * @fileoverview RequestManager module that lib of the EndPoint to RoomManager app.
 * @author  Aldo.Balderrama@fundacion-jala.org (Miguel Aldo Balderrama)
 * @version 1.0.0
 * @module manager_lib/RequestManager
 */

var requireManager = require('./requireManagerLib.js');
var folder = 'request_lib';
/**
 * Obtains request lib.
 *
 * @return {json} return requestLib in object.
 */
module.exports.getRequestLib = function () {
  return requireManager.getRequireLib('requestLib', folder);
};

/**
 * Obtains requestAuthentication lib.
 *
 * @return {json} return requestAuthenticationLib in object.
 */
module.exports.getRequestAuthenticationLib = function () {
  return requireManager.getRequireLib('requestAuthenticationLib', folder);
};

/**
 * Obtains requestToken lib.
 *
 * @return {json} return requestTokenLib in object.
 */
module.exports.getRequestTokenLib = function () {
  return requireManager.getRequireLib('requestTokenLib', folder);
};
