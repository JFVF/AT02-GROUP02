var expect = require('chai').expect;
/**Manager*/
var requireManager = require('../../lib/manager_lib/requireManagerLib.js');
var endPointManager = requireManager.getRequireEndPoinManager();
var resourceManager = requireManager.getRequireResourceManager();
/**Variables*/
var service = endPointManager.getService();
var config = requireManager.getRequireConfig();
var status = resourceManager.getStatus();

describe ('Service Acceptance Test', function (){
	this.timeout(config.timeout);
	var idService = {};
	var firstService = {};
	var index = 0;
	var quant = 1;

	it('GET /services' , function(done){
		service.get(function(err,res){
			idService = res.body;
			firstService = idService[index];
			expect(res.status).to.equal(status.OK);
			expect(res.body.length).to.be.at.least(quant);
            done();
		});
	});

	it('GET /services/{serviceId}' , function(done){
		service.getById(firstService._id, function(err,res){
     	    expect(res.status).to.equal(status.OK);
     	    expect(res.body.name).to.equal(firstService.name);
     	    expect(res.body._id).to.equal(firstService._id);
     	    expect(res.body.type).to.equal(firstService.type);
     	    expect(res.body.version).to.equal(firstService.version);
     	    expect(res.body.serviceUrl).to.equal(firstService.serviceUrl);
     	    expect(res.body.impersonate).to.equal(firstService.impersonate);
     	    expect(res.body.username).to.equal(firstService.username);
     	    expect(res.body.expirationDate).to.equal(firstService.expirationDate);
     	    expect(res.body._v).to.equal(firstService._v);
     	    done();
		});
	});

	it('PUT /services/{serviceId}', function(done){
		var serviceJson = { impersonate: true };
	    service.update(idService[index]._id, serviceJson, function (err, res){
	        expect(res.status).to.equal(status.OK);
	        expect(res.body.name).to.equal(firstService.name);
     	    expect(res.body._id).to.equal(firstService._id);
     	    expect(res.body.type).to.equal(firstService.type);
     	    expect(res.body.version).to.equal(firstService.version);
     	    expect(res.body.serviceUrl).to.equal(firstService.serviceUrl);
     	    expect(res.body.impersonate).to.equal(serviceJson.impersonate);
     	    expect(res.body.username).to.equal(firstService.username);
     	    expect(res.body.expirationDate).to.equal(firstService.expirationDate);
     	    expect(res.body._v).to.equal(firstService._v);
	     	done();
	    });
	});

});
