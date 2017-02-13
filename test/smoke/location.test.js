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
var length = 5;

describe('Location Smoke Test', function () {
    this.timeout(config.timeout);
    var jsonCreateLocation = {};
    var jsonPostLocation = {};
    var name = randomstring.generate({length: length, charset: 'alphabetic'});
    var customName = randomstring.generate({length: length, charset: 'alphabetic'});
    var description = randomstring.generate({length: length, charset: 'alphabetic'});

    beforeEach(function (done) {
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

    afterEach(function (done) {
        location.delete(jsonCreateLocation._id, function (err, res) {
            expect(res.status).to.equal(status.OK);
            location.getById(jsonCreateLocation._id, function (err, res) {
                expect(res.status).to.equal(status.NOT_FOUND);
                done();
            });
        });
    });

    it('POST /locations', function (done) {
        jsonPostLocation = {
            name: 'Name' + name,
            customName: 'Custom' + customName,
            description: 'Description' + description
        };
        location.create(jsonPostLocation, function (err, res) {
            jsonPostLocation = res.body;
            expect(res.status).to.equal(status.OK);
            done();
        });
    });

    it('GET /{locations}', function (done) {
        location.get(function (err, res) {
            expect(res.status).to.equal(status.OK);
            done();
        });
    });

    it('GET /locations/{locationId}', function (done) {
        location.getById(jsonCreateLocation._id, function (err, res) {
            expect(res.status).to.equal(status.OK);
            done();
        });
    });

    it('PUT /locations/{locationId}', function (done) {
        var jsonPutLocation = {
            customName: customName
        };
        location.update(jsonCreateLocation._id, jsonPutLocation, function (err, res) {
            jsonCreateLocation = res.body;
            expect(res.status).to.equal(status.OK);
            done();
        });
    });

    it('DELETE /locations/{locationId}', function (done) {
        location.delete(jsonPostLocation._id, function (err, res) {
            expect(res.status).to.equal(status.OK);
            done();
        });
    });

});
