/**
 * AttendeeLib Module
 * @fileoverview attendeeLib module that obtains the attendees by filter.
 * @author  Jimmy.Romero@fundacion-jala.org (Jimmy Joel Romero Sejas)
 * @version 1.0.0
 * @module attendee_lib/attendeeLib
 */

var requireManager = require('../manager_lib/requireManagerLib.js');

var LogManagement = requireManager.getRequireLogManagement();
var requestManager = requireManager.getRequireRequestManager();
var resourceManager = requireManager.getRequireResourceManager();

var request = requestManager.getRequestLib();
var resource = resourceManager.getResource();
var service = resourceManager.getService();
var method = resourceManager.getRequestMethod();

var filter = '?filter=ji';
var index = 0;

/**
 * Module to GET the Attendee, given a service Id and a filter.
 *
 * @param {function} callback Contains the error and the response.
 */
module.exports.getAttendee = function(callback){
	var endpoint = resource.services + '/' + service[index].id + resource.attendee + filter;
	request.get(endpoint, function(err, res){
		LogManagement.log(resource.services, endpoint, method.GET, err, res);
		callback(err, res);
	});
};
