var expect = require('chai').expect;
/**Manager*/
var requireManager = require('../../lib/manager_lib/requireManagerLib.js');
var endPointManager = requireManager.getRequireEndPoinManager();
var resourceManager = requireManager.getRequireResourceManager();
/**Variables*/
var serviceType = endPointManager.getServiceType();
var config = requireManager.getRequireConfig();
var status = resourceManager.getStatus();

describe('Service Types Smoke Test', function(){
	this.timeout(config.timeout);

	it('GET /service-types', function(done){
		serviceType.getServiceTypes(function(err, res){
			expect(res.status).to.equal(status.OK);
			done();
		});
	});
});
