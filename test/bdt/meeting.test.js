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

var length = 5;
var startTime = 1;
var endTime = 2;

/*
 Feature: Meeting
*/

describe('Meeting Bdt Test:', function () {
    this.timeout(config.timeout);
    /*
     Scenario 1: Verify that you can not create meetings with a nonexistent account.
     Given I have a room.
     When I have a meeting into the room with a nonexistent account.
     Then ensure that the meeting wasnt created
     */
    context('Scenario 1: Verify that you can not create meetings wrong dates.', function () {
        var getRoom = {};
        var jsonPostMeeting = {};
        var organizer = randomstring.generate({length: length, charset: 'alphabetic'});
        var title = randomstring.generate({length: length, charset: 'alphabetic'});
        var location = randomstring.generate({length: length, charset: 'alphabetic'});
        
        it('Given I have a room', function (done){
            room.getRoomByDefault(function(room){
                getRoom = room;
                done();
            });
        });
        it('When I try to create a meeting with wrong end and start date', function (done) {
            jsonPostMeeting = {
                organizer: config.userExchange,
                title: title,
                start: moment().add(endTime, 'hours').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
                end: moment().add(startTime, 'hours').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
                location: location,
                roomEmail: config.emailRoom,
                resources: [config.emailRoom],
                attendees: [config.attendee]
            };
            meeting.create(getRoom.serviceId, getRoom._id ,jsonPostMeeting, function (err, res) {
                expect(res.status).to.equal(status.CONFLICT);
                done();
            });
        });
        it('Then ensure that the meeting was not created', function (done) {
            meeting.getById(getRoom.serviceId, getRoom._id ,jsonPostMeeting._id,function (err, res) {
                expect(res.status).to.equal(status.NOT_FOUND);
                done();
            });
        });

    });
    
});
