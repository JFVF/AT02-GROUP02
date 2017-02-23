var expect = require('chai').expect;
var randomstring = require("randomstring");
var moment = require("moment");
/**Manager*/
var requireManager = require('../../lib/manager_lib/requireManagerLib.js');
var endPointManager = requireManager.getRequireEndPoinManager();
var resourceManager = requireManager.getRequireResourceManager();
/**Variables*/
var meeting = endPointManager.getMeeting();
var config = requireManager.getRequireConfig();
var status = resourceManager.getStatus();
var room = endPointManager.getRoom();
var time = resourceManager.getConstantVariables();


var length = 4;
var startTime = 1;
var endTime = 2;
var quantity = 1;

describe('Meetings Acceptance Test:', function () {
    this.timeout(config.timeout);
    var jsonPostMeeting = null;
    var serviceId = 0;
    var roomId = 0;

    var title = randomstring.generate({length: length, charset: 'alphabetic'});
    var location = randomstring.generate({length: length, charset: 'alphabetic'});

    jsonPostMeeting = {
        organizer: config.userExchange,
        title: title,
        start: moment().add(startTime, 'hours').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
        end: moment().add(endTime, 'hours').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
        location: location,
        roomEmail: config.emailRoom,
        resources: [config.emailRoom],
        attendees: [config.attendee]
    };

    before(function (done) {
        room.getRoomByDefault(function (oneRoom) {
            roomId = oneRoom._id;
            serviceId = oneRoom.serviceId;
            done();
        })
    })
    afterEach(function (done) {
        if (jsonPostMeeting._id) {
            meeting.delete(serviceId, roomId, jsonPostMeeting._id, function (err, res) {
                expect(res.status).to.equal(status.OK);
                done();
            });
        } else {
            done();
        }
    });
    context('POST test', function (done) {
        it('POST /services/{serviceId}/rooms/{roomId}/meetings', function (done) {
            meeting.create(serviceId, roomId, jsonPostMeeting, function (err, res) {
                jsonPostMeeting = res.body;
                expect(res.status).to.equal(status.OK);
                expect(res.body.organizer).to.equal(jsonPostMeeting.organizer);
                expect(res.body.title).to.equal(jsonPostMeeting.title);
                expect(res.body.location).to.equal(jsonPostMeeting.location);
                expect(res.body.roomEmail).to.equal(jsonPostMeeting.roomEmail);
                expect(res.body.kind).to.equal(jsonPostMeeting.kind);
                expect(res.body.__v).to.equal(jsonPostMeeting.__v);
                done();
            });
        });
    })


    context('PUT / DELETE and GET test', function () {
        beforeEach(function (done) {
            meeting.create(serviceId, roomId, jsonPostMeeting, function (err, res) {
                jsonPostMeeting = res.body;
                expect(res.status).to.equal(status.OK);
                expect(res.status).to.equal(status.OK);
                expect(res.body.organizer).to.equal(jsonPostMeeting.organizer);
                expect(res.body.title).to.equal(jsonPostMeeting.title);
                expect(res.body.location).to.equal(jsonPostMeeting.location);
                expect(res.body.roomEmail).to.equal(jsonPostMeeting.roomEmail);
                expect(res.body.kind).to.equal(jsonPostMeeting.kind);
                expect(res.body.__v).to.equal(jsonPostMeeting.__v);
                done();
            });
        });

        it('GET/services/{serviceId}/rooms/{roomId}/meetings/{meetingId}', function (done) {
            meeting.getById(serviceId, roomId, jsonPostMeeting._id, function (err, res) {
                expect(res.status).to.equal(status.OK);
                expect(res.body.organizer).to.equal(jsonPostMeeting.organizer);
                expect(res.body.title).to.equal(jsonPostMeeting.title);
                expect(res.body.location).to.equal(jsonPostMeeting.location);
                expect(res.body.roomEmail).to.equal(jsonPostMeeting.roomEmail);
                expect(res.body.kind).to.equal(jsonPostMeeting.kind);
                expect(res.body.__v).to.equal(jsonPostMeeting.__v);
                done();
            });
        });

        it('GET /services/{serviceId}/rooms/{roomId}/meetings', function (done) {
            meeting.get(serviceId, roomId, function (err, res) {
                expect(res.status).to.equal(status.OK);
                expect(res.body.length).to.be.at.least(quantity);
                done();
            });
        });

        it('PUT /services/{serviceId}/rooms/{roomId}/meetings/{meetingId}', function (done) {
            var jsonUpdateMeeting = {
                start: moment().add(time.ADDFROM, 'hours').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
                end: moment().add(time.ADDTO, 'hours').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
                title: title,
                optionalAttendees: [],
                attendees: ["Administrator@jofo.local"]
            };
            meeting.update(serviceId, roomId, jsonPostMeeting._id, jsonUpdateMeeting, function (err, res) {
                expect(res.status).to.equal(status.OK);
                done();
            });
        });

        it('DELETE /services/{serviceId}/rooms/{roomId}/meetings/{meetingId}', function (done) {
            if (jsonPostMeeting._id) {
                meeting.delete(serviceId, roomId, jsonPostMeeting._id, function (err, res) {
                    expect(res.status).to.equal(status.OK);
                    jsonPostMeeting._id = undefined;
                    meeting.getById(serviceId, roomId, jsonPostMeeting._id, function (err, res) {
                        expect(res.status).to.equal(status.NOT_FOUND);
                        done();
                    });
                });
            }
        })
    });
});


