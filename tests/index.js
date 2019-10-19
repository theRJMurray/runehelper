const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')

chai.use(chaiHttp);
chai.should();
describe("Highscores", () => {
  describe("GET/", () => {

    it("should get highscore data for jZERKk", (done) => {
      chai.request(app)
        .get('/jZERKk')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })

    it("should succeed when no username is provided", (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })

    it("should fail when username is invalid", (done) => {
      chai.request(app)
        .get('/superLongUsernameThatRunescapeWouldntAllow')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.equal("An error occurred")
          done()
        })
    })



  })
})
