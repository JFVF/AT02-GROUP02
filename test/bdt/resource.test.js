var expect = require('chai').expect;
/**Manager*/
var requireManager = require('../../lib/manager_lib/requireManagerLib.js');
var endPointManager = requireManager.getRequireEndPoinManager();
var resourceManager = requireManager.getRequireResourceManager();
/**Variables*/
var config = requireManager.getRequireConfig();
var resource = endPointManager.getResource();
var status = resourceManager.getStatus();

/*
 Feature: Resource

 Scenario 1: Verify the creation of resource

 Given I have access to Room Manager
 When I create a resource 'resourceTest'
 Then ensure 'resourceTest' is created
 And I delete the 'resourceTest' created
 */

describe('Feature: resource:', function () {
    context('Scenario 1: Verify the creation of resource', function () {
        this.timeout(config.timeout);
        var resourceJson = {};
        it('Given I have a \'resourceTest\'', function (done) {
            var resourceJsonUpdate = {
                name: 'resourceTest',
                customName: 'ResourceTest',
                description: 'This is the resourceTest'
            };
            resource.create(resourceJsonUpdate, function (err, res) {
                resourceJson = res.body;
                expect(res.status).to.equal(status.OK);
                done();
            });
        });

        it('When ensure \'resourceTest\' is created', function (done) {
            resource.getById(resourceJson._id, function (err, res) {
                expect(res.status).to.equal(status.OK);
                done();
            });
        });
        it('Then I delete the \'resourceTest\' created', function (done) {
            resource.delete(resourceJson._id, function (err, res) {
                expect(res.status).to.equal(status.OK);
                done();
            });
        });
    });

    /*
     Scenario 2: Verify that a resource deleted don't exist.
     Given I have access to Room Manager
     When I create a resource 'resourceTest'
     When I deleted the resource 'resourceTest'
     Then ensure 'resourceTest' is deleted
     */
    context('Scenario 2: Verify that a resource deleted dont exist', function () {
        this.timeout(config.timeout);
        var resourceJson = {};
        it('Given I create  a resource \'resourceTest\'', function (done) {
            resourceJson = {
                name: 'resourceTest',
                customName: 'ResourceTest',
                description: 'This is the resourceTest'
            };
            resource.create(resourceJson, function (err, res) {
                resourceJson = res.body;
                expect(res.status).to.equal(status.OK);
                done();
            });
        });
        it('When I deleted the resource \'resourceTest\'', function (done) {
            resource.delete(resourceJson._id, function (err, res) {
                resourceJson = res.body;
                expect(res.status).to.equal(status.OK);
                done();
            });
        });
        it('Then ensure \'resourceTest\' is deleted', function (done) {
            resource.getById(resourceJson._id, function (err, res) {
                expect(res.status).to.equal(status.NOT_FOUND);
                done();
            });
        });
    });
});
