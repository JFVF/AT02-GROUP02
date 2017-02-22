/**
 * MeetingLib Module
 * @fileoverview meetingLib module that executes POST, GET, PUT and DELETE requests for Meetings.
 * @author  Juana.Rodriguez@fundacion-jala.org (Juana Francisca Rodriguez)
 * @version 1.0.0
 * @module meeting_lib/meetingLib
 */

 /**Manager*/
 var requireManager = require('../manager_lib/requireManagerLib.js');
 var requestManager = requireManager.getRequireRequestManager();
 var resourceManager = requireManager.getRequireResourceManager();
 var LogManagement = requireManager.getRequireLogManagement();
 /**Varibles*/
var requestAuthentication = requestManager.getRequestAuthenticationLib();
var request = requestManager.getRequestLib();
var resource = resourceManager.getResource();
var resourceRoom = resourceManager.getRoom();
var resourceService = resourceManager.getService();
var method = resourceManager.getRequestMethod();

/**
 * The module create allow creating a new meeting.
 *
 * @param {json} meetingJson, contains a json file with the meeting attributes.
 * @param {function}callback, contains the error and the response.
 */
module.exports.create = function (serviceId, roomId, meetingJson, callback) {
    var endPoint = resource.services + '/' + serviceId + resource.rooms + '/' + roomId + resource.meeting;
    requestAuthentication.create(endPoint, meetingJson, function (err, res) {
        LogManagement.log(resource.meeting, endPoint, method.POST, err, res);
        callback(err, res);
    });
};

/**
 * The method gets all the meetings created
 *
 * @param {function} callback, contains the error and the response.
 */
module.exports.get = function (serviceId, roomId, callback) {
    var endPoint = resource.services + '/' + serviceId + resource.rooms + '/' + roomId + resource.meeting;
    request.get(endPoint, function (err, res) {
        LogManagement.log(resource.meeting, endPoint, method.GET, err, res);
        callback(err, res);
    });
};

/**
 * The module gets a meeting given an id.
 *
 * @param {String} idMeeting, contains the id of meeting at get.
 * @param {function}callback, contains the error and the response.
 */
module.exports.getById = function (serviceId, roomId, idMeeting, callback) {
    var endPoint = resource.services + '/' + serviceId + resource.rooms + '/' + roomId + resource.meeting + '/' + idMeeting;
    request.get(endPoint, function (err, res) {
        LogManagement.log(resource.meeting, endPoint, method.GET, err, res);
        callback(err, res);
    });
};

/**
 * The module updates a specific meeting.
 *
 * @param {String} idMeeting, contains the id of meeting at update.
 * @param {json}meetingJson, contains a json file with the meeting attributes that will be updated.
 * @param{function} callback, contains the error and the response.
 */
module.exports.update = function (serviceId, roomId, idMeeting, meetingJson, callback) {
    var endPoint = resource.services + '/' + serviceId + resource.rooms + '/' + roomId + resource.meeting + '/' + idMeeting;
    requestAuthentication.update(endPoint, meetingJson, function (err, res) {
        LogManagement.log(resource.meeting, endPoint, method.PUT, err, res);
        callback(err, res);
    });
};

/**
 * The module deletes a specific meeting given an id.
 *
 * @param {String} idMeeting, contains the id of meeting at delete.
 * @param {function}callback, contains the error and the response.
 */
module.exports.delete = function (serviceId, roomId, idMeeting, callback) {
    var endPoint = resource.services + '/' + serviceId + resource.rooms + '/' + roomId + resource.meeting + '/' + idMeeting;
    requestAuthentication.delete(endPoint, function (err, res) {
        LogManagement.log(resource.meeting, endPoint, method.DELETE, err, res);
        callback(err, res);
    });
};

