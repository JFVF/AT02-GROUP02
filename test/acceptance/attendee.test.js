var expect = require('chai').expect;
var randomstring = require("randomstring");
var moment = require("moment");
/**Manager*/
var requireManager = require('../../lib/manager_lib/requireManagerLib.js');
var endPointManager = requireManager.getRequireEndPoinManager();
var resourceManager = requireManager.getRequireResourceManager();
/**Variables*/
var attendee = endPointManager.getAttendee();
var config = resourceManager.getConfig();
var status = resourceManager.getStatus();
var room = endPointManager.getRoom();
var meeting = endPointManager.getMeeting();

var length = 4;
var startTime = 1;
var endTime = 2;

describe('Attendee Acceptance Test', function () {
    this.timeout(config.timeout);
    var attendeeJson = {};
    var jsonPostMeeting = null;
    var firstElement = 0;
    var minimumAttendee = 1;
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
            meeting.create(serviceId, roomId, jsonPostMeeting, function (err, res) {
                jsonPostMeeting = res.body;
                expect(res.status).to.equal(status.OK);
                done();
            });
        })
    })
    after(function (done) {

        meeting.delete(serviceId, roomId, jsonPostMeeting._id, function (err, res) {
            expect(res.status).to.equal(status.OK);
            done();
        });

    });


    it('GET /services/{serviceId}/attendees', function (done) {

        attendee.getAttendee(function (err, res) {
            expect(res.body[firstElement]._id).to.a('String');
            expect(res.body[firstElement].cn).to.equal(config.userExchange);
            expect(res.body[firstElement].displayName).to.equal(config.userExchange);
            expect(res.body[firstElement].name).to.equal(config.userExchange);
            expect(res.body[firstElement].sAMAccountName).to.equal(config.userExchange);
            expect(res.body[firstElement].userPrincipalName).to.equal(config.attendee);
            expect(res.body[firstElement].mail).to.equal(config.attendee);
            expect(res.body[firstElement].serviceId).to.equal(serviceId);

            expect(res.status).to.equal(status.OK);
            done();
        })
    });
});
