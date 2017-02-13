/**
 * ServiceTypeLib Module
 * @fileoverview serviceTypeLib module that obtains the the service types.
 * @author  Jimmy.Romero@fundacion-jala.org (Jimmy Joel Romero Sejas)
 * @version 1.0.0
 * @module serviceType_lib/serviceTypeLib
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
 * Module to GET the Service Type.
 *
 * @param {function} callback Contains the error and the response.
 */
module.exports.getServiceTypes = function(callback){
	var endpoint = resource.serviceTypes;
	request.get(endpoint, function(err, res){
		LogManagement.log(resource.serviceTypes, endpoint, method.GET, err, res);
		callback(err, res);
	});
};
