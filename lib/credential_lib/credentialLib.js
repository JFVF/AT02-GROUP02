/**
 * CredentialsLib Module.
 *
 * @fileoverview CredentialsLib module that obtains credentials and token of the aplicaction.
 * @author  Aldo.Balderrama@fundacion-jala.org (Miguel Aldo Balderrama)
 * @version 1.0.0
 * @module credential_lib/credentialLib
 */

var requireManager = require('../manager_lib/requireManagerLib.js');

var endPointManager = requireManager.getRequireEndPoinManager();
var config = requireManager.getRequireConfig();
var login = endPointManager.getLogin();

/**
 * Get credentials in format json.
 *
 * @return {json} credentialsJson return credentials in format json.
 */
module.exports.getCredentialsJson = function () {
  return {
    username : config.domain + '\\' + config.user,
    password : config.password,
    authentication : config.authentication
  };
};

/**
 * Get token of the application.
 * @param {function} callback contains the token.
 */
module.exports.token = function (callback) {
  login.create(this.getCredentialsJson(), function (err, res){
    var token = config.token + res.body.token;
    callback(token);
  });
};
