/**
 * RequireManager Module.
 *
 * @fileoverview RequireManager module.
 * @author  Aldo.Balderrama@fundacion-jala.org (Miguel Aldo Balderrama)
 * @version 1.0.0
 * @module manager_lib/RequireManager
 */

var UP_LEVEL = '../';
var LEVEL = './';
var SLASH = '/';
var EXTENSION_JS = '.js';
var RESOURCE_PATH = UP_LEVEL + UP_LEVEL + 'resources/';
var EXTENSION_JSON = '.json';

var folderManager = 'manager_lib';


/**
 * Obtains config the framework.
 *
 * @return {json} return configName in literal object.
 */
module.exports.getRequireConfigByFileName = function (configName) {
  return require(UP_LEVEL + UP_LEVEL + configName + EXTENSION_JSON);
};

/**
 * Obtains config the framework.
 *
 * @return {json} return configName in literal object.
 */
module.exports.getRequireConfig = function () {
  return this.getRequireConfigByFileName('config');
};

/**
 * Obtains require endPointManager lib.
 *
 * @return {object} return require endPointManager object.
 */
module.exports.getRequireEndPoinManager = function () {
  return this.getRequireLib('endPointManagerLib', folderManager);
};

/**
 * Obtains require requestManager lib.
 *
 * @return {object} return require requestManager object.
 */
module.exports.getRequireRequestManager = function () {
  return this.getRequireLib('requestManagerLib', folderManager);
};

/**
 * Obtains require resourceManager lib.
 *
 * @return {object} return require resourceManager object.
 */
module.exports.getRequireResourceManager = function () {
  return this.getRequireLib('resourceManagerLib', folderManager);
};

/**
 * Obtains require json.
 *
 * @param {String} jsonFileName is resource required.
 * @return {json} return require object.
 */
module.exports.getRequireJson = function (jsonFileName) {
  return this.getRequireTowLevelUP(jsonFileName, 'resources', EXTENSION_JSON);
};

/**
 * Obtains require json.
 *
 * @param {String} jsonFileName is resource required
 * @return {json} return require object.
 */
module.exports.getRequireLogManagement = function () {
  return this.getRequireTowLevelUP('logManagement', 'logger', EXTENSION_JS);
};

/**
 * Obtains require lib.
 *
 * @param {String} fileName is resource required
 * @param {String} folder is folder required
 * @return {object} return require object.
 */
module.exports.getRequireLib = function (fileName, folder) {
  return require(UP_LEVEL + folder + SLASH + fileName + EXTENSION_JS);
};

/**
 * Obtains require lib.
 *
 * @param {String} resource is resource required
 * @return {object} return require object.
 */
module.exports.getRequireManager = function (fileName) {
  return require(LEVEL + fileName + EXTENSION_JS);
};


/**
 * Obtains require.
 *
 * @param {String} fileName is resource required
 * @return {json} return require object.
 */
module.exports.getRequireTowLevelUP = function (fileName, folder, extension) {
  return require(UP_LEVEL + UP_LEVEL + folder + SLASH + fileName + extension);
};
