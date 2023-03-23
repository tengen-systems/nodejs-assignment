const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const { VehicleData } = require("../models");
const { expect } = chai;

chai.use(chaiHttp);

describe("VehicleData", () => {
  after((done) => {
    VehicleData.deleteMany({}).then(() => {
      done();
    });
  });

  describe("/GET vehicle-data", () => {
    it("it should GET all the vehicle data", (done) => {
      chai
        .request(server)
        .get("/api/vehicle-data")
        .end((err, res) => {
          // res.should.have.status(200);
          expect(res.status).to.be.eq(200);
          expect(res.body).to.be.a("array");
          expect(res.body.length).to.be.eql(0);
          done();
        });
    });

    it("it should GET a vehicle data", (done) => {
      VehicleData.create({
        time: 1511436338000,
        energy: 53.2,
        gps: "52.093448638916016|5.117378234863281",
        odo: 88526.413,
        speed: 0,
        soc: 72.8
      }).then((data) => {
        chai
          .request(server)
          .get(`/api/vehicle-data/${data.id}`)
          .end((err, res) => {
            const { _id } = data.toObject();
            expect(res.status).to.be.eq(200);
            expect(res.body).to.deep.eq({
              time: 1511436338000,
              energy: 53.2,
              gps: "52.093448638916016|5.117378234863281",
              odo: 88526.413,
              speed: 0,
              soc: 72.8,
              _id: _id.toHexString(),
              __v: 0
            });
            done();
          });
      });
    });
  });
});
