/**
 * LoginLib Module.
 *
 * @fileoverview LoginLib module that obtains URI.
 * @author  Aldo.Balderrama@fundacion-jala.org (Miguel Aldo Balderrama)
 * @version 1.0.0
 * @module login_lib/loginLib
 */

/**Manager*/
var requireManager = require('../manager_lib/requireManagerLib.js');
var requestManager = requireManager.getRequireRequestManager();
var resourceManager = requireManager.getRequireResourceManager();
var LogManagement = requireManager.getRequireLogManagement();
/**Varibles*/
var request = requestManager.getRequestLib();
var resource = resourceManager.getResource();
var method = resourceManager.getRequestMethod();

/**
 * It makes a create allow creating a new login, to obtains a token.
 *
 * @param {json} credentialsJson Contains a json file with the login attributes.
 * @param {function} callback Contains the error and the response.
 */
module.exports.create = function (credentialsJson, callback) {
	var endPoint = resource.login;
	request.create(endPoint, credentialsJson, function (err, res) {
			LogManagement.log(resource.login, endPoint, method.POST, err, res);
			callback(err, res);
	});
};
