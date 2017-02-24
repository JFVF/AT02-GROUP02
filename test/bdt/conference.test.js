var expect = require('chai').expect;
/**Manager*/
var requireManager = require('../../lib/manager_lib/requireManagerLib.js');
var endPointManager = requireManager.getRequireEndPoinManager();
var resourceManager = requireManager.getRequireResourceManager();
/**Variables*/
var location = endPointManager.getLocation();
var config = requireManager.getRequireConfig();
var status = resourceManager.getStatus();
var room = endPointManager.getRoom();

var idRoomTarata;
var idPlantaBaja;
var idPueblito;
var idJala;
var getRooms;

describe('Re-assign the disabled conference room to a nested location', function () {
    this.timeout(config.timeout);

    before(function (done) {
        room.getAllRooms(function (err, res) {
            getRooms = res.body;
            done();
        })
    });

    after(function (done) {
        location.delete(idJala, function (err, res) {
            location.delete(idPlantaBaja, function (err, res) {
                location.delete(idPueblito, function (err, res) {
                    var jsonRoom = {
                        "enabled": true
                    };
                    room.update(idRoomTarata, jsonRoom, function (err, res) {
                        done();
                    })
                })
            })
        })
    });

    describe('Given I have a disabled conference room (Tarata)', function () {
        before(function (done) {
            var jsonRoom = {
                "enabled": false
            };
            room.update(getRooms[0]._id, jsonRoom, function (err, res) {
                idRoomTarata = res.body._id;
                done();
            })
        });


        it('And I have (Tarata) assigned to (Jalasoft/Planta Baja)', function (done) {

            var locationJson = {
                name: "Jalasoft",
                customName: "Jalasoft",
                description: "bla bla"

            };
            location.create(locationJson, function (err1, res1) {
                idJala = res1.body._id;
                var locationsTwo = {
                    name: "PlantaBaja",
                    customName: "PlantaBaja",
                    parentId: res1.body._id
                };
                location.create(locationsTwo, function (err2, res2) {
                    idPlantaBaja = res2.body._id;
                    var jsonLocation = {
                        locationId: res2.body._id
                    }
                    room.update(idRoomTarata, jsonLocation, function (err, res) {
                        done();
                    });
                })
            })

        });

        it('And I have the location (Jalasoft\Planta Baja\Pueblito)', function (done) {
            var locationsThree = {
                name: "Pueblito",
                customName: "Pueblito",
                parentId: idPlantaBaja
            };
            location.create(locationsThree, function (err, res) {
                idPueblito = res.body._id;
                done();
            })
        });

        it('And I have conference room (Quillacollo) is  assigned  to (Jalasoft\Planta Baja\Pueblito)', function (done) {
            room.update(getRooms[1]._id, {locationId: idPueblito}, function (err, res) {
                done();
            })
        })
    });

    describe('When I assign (Tarata)  to (Jalasoft\Planta Baja\Pueblito)', function () {
        var resTarataPueblito;
        before(function (done) {
            room.update(idRoomTarata, {locationId: idPueblito}, function (err, res) {
                resTarataPueblito = res;
                done();
            })
        });

        it('Then  Tarata is correctly assigned to the new location', function () {
            expect(resTarataPueblito.status).to.equal(200);
            expect(resTarataPueblito.body.locationId).to.equal(idPueblito);
        });

        it('And Tarata status is still disabled', function () {
            expect(resTarataPueblito.body.enabled).to.be.false;
        });

        it('And the total number of conference rooms assigned to (Jalasoft\Planta Baja\Pueblito) is 2', function (done) {
            room.getAllRooms(function (err, res) {
                var value = 0;
                res.body.filter(x => x.locationId == idPueblito).forEach(y => value++);
                expect(value).to.equal(2);
                done();
            });
        });
        it('And the total number of conference rooms assigned to (Jalasoft\Planta Baja) is 0', function (done) {
            room.getAllRooms(function (err, res) {
                var value = 0;
                res.body.filter(x => x.locationId == idPlantaBaja).forEach(y => value++);
                expect(value).to.equal(0);
                done();
            })
        })
    })
});