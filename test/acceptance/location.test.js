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
var __v = 0;
var quantity = 1;

describe('Location Acceptance Test:', function () {
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
            expect(res.body.path).to.equal(jsonCreateLocation.path);
            expect(res.body.name).to.equal(jsonCreateLocation.name);
            expect(res.body.customName).to.equal(jsonCreateLocation.customName);
            expect(res.body.description).to.equal(jsonCreateLocation.description);
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
            expect(res.body.path).to.equal(jsonPostLocation.path);
            expect(res.body.name).to.equal(jsonPostLocation.name);
            expect(res.body.__v).to.equal(__v);
            expect(res.body.customName).to.equal(jsonPostLocation.customName);
            expect(res.body.description).to.equal(jsonPostLocation.description);
            done();
        });
    });

    it('GET /{locations}', function (done) {
        location.get(function (err, res) {
            expect(res.status).to.equal(status.OK);
            expect(res.body.length).to.be.at.least(quantity);
            done();
        });
    });

    it('GET /locations/{locationId}}', function (done) {
        location.getById(jsonCreateLocation._id, function (err, res) {
            expect(res.status).to.equal(status.OK);
            expect(res.body.path).to.equal(jsonCreateLocation.path);
            expect(res.body.name).to.equal(jsonCreateLocation.name);
            expect(res.body.__v).to.equal(__v);
            expect(res.body.customName).to.equal(jsonCreateLocation.customName);
            expect(res.body.description).to.equal(jsonCreateLocation.description);
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
            expect(res.body.path).to.equal(jsonCreateLocation.path);
            expect(res.body.name).to.equal(jsonCreateLocation.name);
            expect(res.body.__v).to.equal(__v);
            expect(res.body.customName).to.equal(jsonCreateLocation.customName);
            expect(res.body.customName).to.equal(jsonCreateLocation.customName);
            done();
        });
    });

    it('DELETE /locations/{locationId}', function (done) {//verificart para que ya no sea independiente
        location.delete(jsonPostLocation._id, function (err, res) {
            expect(res.status).to.equal(status.OK);
            location.getById(jsonPostLocation._id, function (err, res) {
                expect(res.status).to.equal(status.NOT_FOUND);
                done();
            });
        });
    });

});
