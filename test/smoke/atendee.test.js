var expect = require('chai').expect;
/**Manager*/
var requireManager = require('../../lib/manager_lib/requireManagerLib.js');
var endPointManager = requireManager.getRequireEndPoinManager();
var resourceManager = requireManager.getRequireResourceManager();
/**Variables*/
var attendee = endPointManager.getAttendee();
var config = resourceManager.getConfig();
var status = resourceManager.getStatus();

describe('Attendee Smoke Test', function(){
	this.timeout(config.timeout);
	it('GET /services/{serviceId}/attendees', function(done){
		attendee.getAttendee(function(err, res){
			expect(res.status).to.equals(status.OK);
			done();
		});
	});
});
