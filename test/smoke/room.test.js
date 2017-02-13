var expect = require('chai').expect;
/**Manager*/
var requireManager = require('../../lib/manager_lib/requireManagerLib.js');
var endPointManager = requireManager.getRequireEndPoinManager();
var resourceManager = requireManager.getRequireResourceManager();
/**Variables*/
var room = endPointManager.getRoom();
var config = requireManager.getRequireConfig();;
var status = resourceManager.getStatus();

describe('Rooms Smoke Test', function () {
	this.timeout(config.timeout);

	before(function(done){
		room.getRoomByDefault(function (oneRoom){			
			defaultRoom = oneRoom;
			done();
		});
	});

	after(function(done){
		var roomJsonUpdate = {
			enabled : true,
			location : 'string',
			customDisplayName : 'Room 002',
			code : 'string'
		};
		room.update(defaultRoom._id, roomJsonUpdate, function(err, res){
			expect(res.status).to.equal(status.OK);				
			done();
		});
	});

	it('GET /rooms', function(done){
		room.getAllRooms(function(err, res){
			expect(res.status).to.equal(status.OK);
			done();
		});
	});

	it('GET /rooms/{roomId}', function(done){
		room.getRoom(defaultRoom._id, function(err, res){
			expect(res.status).to.equal(status.OK);
			done();
		});
	});

	it('PUT /rooms/{roomId}',function (done){
		var roomJson = {
			enabled : true,
			location : 'string',
			customDisplayName : 'update Room 002 ID TEST',
			code : 'string'
		};
		room.update(defaultRoom._id, roomJson, function (err, res){
			expect(res.status).to.equal(status.OK);
			done();
		});
	});

	it('GET /services/{serviceId}/rooms', function(done){
		room.getAllRoomsByServiceId(defaultRoom.serviceId ,function(err, res){
			expect(res.status).to.equal(status.OK);
			done();
		});
	});

	it('GET /services/{serviceId}/rooms/{roomId}', function(done){
		room.getRoomByServiceIdAndRoomId(defaultRoom.serviceId, defaultRoom._id, function(err, res){
			expect(res.status).to.equal(status.OK);
			done();
		});
	});

	it('PUT /services/{serviceId}/rooms/{roomId}', function(done){
		var roomJson = {
			 enabled : true,
			location : 'string',
			customDisplayName : 'update Room 002 index test',
			code : 'string'
		};
		room.updateByServiceIdAndRoomId(defaultRoom.serviceId, defaultRoom._id, roomJson, function(err, res){
			expect(res.status).to.equal(status.OK);
			done();
		});
	});
});
