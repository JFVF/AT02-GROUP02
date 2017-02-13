/**
 * LocationLib Module
 *
 * @fileoverview locationLib module that executes POST, GET, PUT and DELETE requests for Locations.
 * @author  Juana.Rodriguez@fundacion-jala.org (Juana Francisca Rodriguez)
 * @version 1.0.0
 * @module location_lib/locationLib
 */

/**Manager*/
var requireManager = require('../manager_lib/requireManagerLib.js');
var requestManager = requireManager.getRequireRequestManager();
var resourceManager = requireManager.getRequireResourceManager();
var LogManagement = requireManager.getRequireLogManagement();
/**Varibles*/
var request = requestManager.getRequestTokenLib();
var resource = resourceManager.getResource();
var method = resourceManager.getRequestMethod();

/**
 * The module create allow creating a new location.
 *
 * @param {json} locationJson, contains a json file with the location attributes.
 * @param {function}callback, contains the error and the response.
 */
module.exports.create = function (locationJson, callback) {
    var endPoint = resource.locations;
    request.create(endPoint, locationJson, function (err, res) {
        LogManagement.log(resource.locations, endPoint, method.POST, err, res);
        callback(err, res);
    });
};
/**
 * The method gets all the locations created
 *
 * @param {function} callback, contains the error and the response.
 */
module.exports.get = function (callback) {
    var endPoint = resource.locations;
    request.get(endPoint, function (err, res) {
        LogManagement.log(resource.locations, endPoint, method.GET, err, res);
        callback(err, res);
    });
};
/**
 * The module gets a location given an id.
 * 
 * @param {String} id, contains the id of location at get.
 * @param {function}callback, contains the error and the response.
 */
module.exports.getById = function (id, callback) {
    var endPoint = resource.locations + '/' + id;
    request.get(endPoint, function (err, res) {
        LogManagement.log(resource.locations, endPoint, method.GET, err, res);
        callback(err, res);
    });
};
/**
 * The module updates a specific location.
 * 
 * @param {String} id, contains the id of location at update.
 * @param {json} locationJson, contains a json file with the location attributes that will be updated.
 * @param {function}callback, contains the error and the response.
 */
module.exports.update = function (id, locationJson, callback) {
    var endPoint = resource.locations + '/' + id;
    request.update(endPoint, locationJson, function (err, res) {
        LogManagement.log(resource.locations, endPoint, method.PUT, err, res);
        callback(err, res);
    });
};
/**
 * The module deletes a specific location given an id.
 * 
 * @param {String} id, contains the id of location at delete.
 * @param {function}callback, contains the error and the response.
 */
module.exports.delete = function (id, callback) {
    var endPoint = resource.locations + '/' + id;
    request.delete(endPoint, function (err, res) {
        LogManagement.log(resource.locations, endPoint, method.DELETE, err, res);
        callback(err, res);
    });
};
