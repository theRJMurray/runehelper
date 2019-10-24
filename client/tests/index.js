const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')

chai.use(chaiHttp);
chai.should();
describe("Highscores", () => {
  describe("GET/", () => {

    it("should get highscore data for jZERKk", (done) => {
      chai.request(app)
        .get('/search/jZERKk')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })

    it("should fail when no username is provided", (done) => {
      chai.request(app)
        .get('/search/')
        .end((err, res) => {
          res.should.have.status(404)
          done()
        })
    })

    it("should fail when username is invalid", (done) => {
      chai.request(app)
        .get('/search/superLongUsernameThatRunescapeWouldntAllow')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.equal("An error occurred")
          done()
        })
    })



  })
})
