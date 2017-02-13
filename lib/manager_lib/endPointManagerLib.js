/**
 * ResourceManager Module.
 *
 * @fileoverview ResourceManager module that lib of the EndPoint to RoomManager app.
 * @author  Aldo.Balderrama@fundacion-jala.org (Miguel Aldo Balderrama)
 * @version 1.0.0
 * @module manager_lib/ResourceManager
 */

var requireManager = require('./requireManagerLib.js');

/**
 * Obtains attendee lib.
 *
 * @return {json} return attendeeLib in object.
 */
module.exports.getAttendee = function () {
  return requireManager.getRequireLib('attendeeLib', 'attendee_lib');
};

/**
 * Obtains location lib.
 *
 * @return {json} return locationLib in object.
 */
module.exports.getLocation = function () {
  return requireManager.getRequireLib('locationLib', 'location_lib');
};

/**
 * Obtains login lib.
 *
 * @return {json} return loginLib in object.
 */
module.exports.getLogin = function () {
  return requireManager.getRequireLib('loginLib', 'login_lib');
};

/**
 * Obtains meeting lib.
 *
 * @return {json} return meetingLib in object.
 */
module.exports.getMeeting = function () {
  return requireManager.getRequireLib('meetingLib', 'meeting_lib');
};

/**
 * Obtains outOfOrder lib.
 *
 * @return {json} return outOfOrderLib in object.
 */
module.exports.getOutOfOrder = function () {
  return requireManager.getRequireLib('outOfOrderLib', 'outOfOrder_lib');
};

/**
 * Obtains resource lib.
 *
 * @return {json} return resourceLib in object.
 */
module.exports.getResource = function () {
  return requireManager.getRequireLib('resourceLib', 'resource_lib');
};

/**
 * Obtains room lib.
 *
 * @return {json} return roomLib in object.
 */
module.exports.getRoom = function () {
  return requireManager.getRequireLib('roomLib', 'room_lib');
};

/**
 * Obtains service lib.
 *
 * @return {json} return serviceLib in object.
 */
module.exports.getService = function () {
  return requireManager.getRequireLib('serviceLib', 'service_lib');
};

/**
 * Obtains serviceType lib.
 *
 * @return {json} return serviceTypeLib in object.
 */
module.exports.getServiceType = function () {
  return requireManager.getRequireLib('serviceTypeLib', 'serviceType_lib');
};
