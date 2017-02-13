var expect = require('chai').expect;
/**Manager*/
var requireManager = require('../../lib/manager_lib/requireManagerLib.js');
var endPointManager = requireManager.getRequireEndPoinManager();
var resourceManager = requireManager.getRequireResourceManager();
/**Variables*/
var status = resourceManager.getStatus();
var config = requireManager.getRequireConfig();
var credentials = requireManager.getRequireLib('credentialLib', 'credential_lib');
var login = endPointManager.getLogin();

describe('Login smoke test', function () {
	this.timeout(config.timeout);
	it('POST /login', function (done) {
		var credentialsJson = credentials.getCredentialsJson();
		login.create(credentialsJson, function (err, res){
			expect(res.status).to.equal(status.OK);
			done();
		});
	});
});
