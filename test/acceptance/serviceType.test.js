var expect = require('chai').expect;
/**Manager*/
var requireManager = require('../../lib/manager_lib/requireManagerLib.js');
var endPointManager = requireManager.getRequireEndPoinManager();
var resourceManager = requireManager.getRequireResourceManager();
/**Variables*/
var serviceType = endPointManager.getServiceType();
var config = requireManager.getRequireConfig();
var status = resourceManager.getStatus();

describe('Service Types Acceptance Test', function(){
	this.timeout(config.timeout);
	var serviceTypeJson = {};
	var arrayServiceType;
	var firstElement = 0;
	var minimumServiceType = 1;

	before(function(done){
		serviceType.getServiceTypes(function(err, res){
			expect(res.status).to.equal(status.OK);
			arrayServiceType = res.body;
			done();
		});
	});

	it('GET /service-types', function(done){
		serviceType.getServiceTypes(function(err, res){
			if(expect(arrayServiceType.length).to.be.at.least(minimumServiceType)){
				serviceTypeJson = arrayServiceType[firstElement];
				expect(res.body[firstElement].version).to.equal(serviceTypeJson.version);
				expect(res.body[firstElement].name).to.equal(serviceTypeJson.name);
				expect(res.body[firstElement].support).to.deep.equal(serviceTypeJson.support);				
			}			
			else{
				serviceTypeJson = arrayServiceType;
				expect(res.body).to.be.at.least(serviceTypeJson);
			}
			expect(res.status).to.equal(status.OK);
			done();
		});
	});
});
