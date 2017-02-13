var expect = require('chai').expect;
var randomstring = require("randomstring");
/**Manager*/
var requireManager = require('../../lib/manager_lib/requireManagerLib.js');
var endPointManager = requireManager.getRequireEndPoinManager();
var resourceManager = requireManager.getRequireResourceManager();
/**Variables*/
var location = endPointManager.getLocation();
var config = requireManager.getRequireConfig();
var status = resourceManager.getStatus();
var room = endPointManager.getRoom();
var length = 5;
/*
 Feature: Location

 Scenario 1: Verify that a location is associate with a room.
 Given I have a room
 And I have a location 'locationTest'
 When I associate the location with the room
 Then ensure 'locationTest' is associate with the 'roomTest'
 */

describe('Location Bdt Test:', function () {
    this.timeout(config.timeout);
    context('Scenario 1: Verify that a location is associate with a room', function () {
        var roomObtenido = {};
        var jsonCreateLocation = {};
        var jsonPutRoom = {};
        var name = randomstring.generate({length: length, charset: 'alphabetic'});
        var customName = randomstring.generate({length: length, charset: 'alphabetic'});
        var description = randomstring.generate({length: length, charset: 'alphabetic'});

        after(function (done) {
            location.delete(jsonCreateLocation._id, function (err, res) {
                expect(res.status).to.equal(status.OK);
                location.getById(jsonCreateLocation._id, function (err, res) {
                    expect(res.status).to.equal(status.NOT_FOUND);
                    done();
                });
            });
        });

        it('Given I have a room', function (done) {
            room.getRoomById(function (err, res) {
                roomObtenido = res.body;
                expect(res.status).to.equal(status.OK);
                done();
            });
        });

        it('And I have a location locationTest', function (done) {
            jsonCreateLocation = {
                name: name,
                customName: customName,
                description: description
            };
            location.create(jsonCreateLocation, function (err, res) {
                jsonCreateLocation = res.body;
                expect(res.status).to.equal(status.OK);
                done();
            });
        });

        it('When I associate the location in the room', function (done) {
            jsonPutRoom = {
                enabled: true,
                locationId: jsonCreateLocation._id,
                code: description
            };
            room.update(jsonPutRoom, function (err, res) {
                jsonPutRoom = res.body;
                expect(res.status).to.equal(status.OK);
                done();
            });
        });

        it('Then ensure locationTest is assign in the roomTest', function (done) {
            room.getRoomById(function (err, res) {
                expect(res.status).to.equal(status.OK);
                expect(jsonCreateLocation._id).to.equal(jsonPutRoom.locationId);
                done();
            });
        });

    });

});
