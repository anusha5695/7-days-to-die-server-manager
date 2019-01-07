var supertest = require('supertest');
var expect = require("chai").expect;

describe('POST /api/sdtdserver/cron', function () {

  it('should return 200 with valid info', function (done) {
    supertest(sails.hooks.http.app)
      .post('/api/sdtdserver/cron')
      .send({
        serverId: 1,
        command: 'help',
        temporalValue: '0 */5 * * *'
      })
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('should return 400 when command or temporal value is not given', function (done) {
    supertest(sails.hooks.http.app)
      .post('/api/sdtdserver/cron')
      .send({
        serverId: 1,
        temporalValue: '0 */5 * * *'
      })
      .expect(400);

    supertest(sails.hooks.http.app)
      .post('/api/sdtdserver/cron')
      .send({
        serverId: 1,
        command: 'help',
      })
      .expect(400, done);
  });
  it('should return 400 when temporal value is invalid', function (done) {
    supertest(sails.hooks.http.app)
      .post('/api/sdtdserver/cron')
      .send({
        serverId: 1,
        command: 'help',
        temporalValue: 'invalid'
      })
      .expect(400, done);
  });
});

describe('PATCH /api/sdtdserver/cron', function () {

  it('should return 200 with valid info', function (done) {
    supertest(sails.hooks.http.app)
      .patch('/api/sdtdserver/cron')
      .send({
        jobId: 1,
        command: 'help',
        temporalValue: '0 */5 * * *'
      })
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('should return 400 when command or temporal value is not given', function (done) {
    supertest(sails.hooks.http.app)
      .patch('/api/sdtdserver/cron')
      .send({
        jobId: 1,
        temporalValue: '0 */5 * * *'
      })
      .expect(400);

    supertest(sails.hooks.http.app)
      .patch('/api/sdtdserver/cron')
      .send({
        jobId: 1,
        command: 'help',
      })
      .expect(400, done);
  });
  it('should return 400 when temporal value is invalid', function (done) {
    supertest(sails.hooks.http.app)
      .patch('/api/sdtdserver/cron')
      .send({
        jobId: 1,
        command: 'help',
        temporalValue: 'invalid'
      })
      .expect(400, done);
  });
});

describe('GET /api/sdtdserver/cron/list', function () {

  it('should return 200 with valid info', function (done) {
    supertest(sails.hooks.http.app)
      .get('/api/sdtdserver/cron/list')
      .query({
        serverId: 1,
      })
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /api/sdtdserver/cron/notifications', function () {

  it('should return 200 with valid info', function (done) {
    supertest(sails.hooks.http.app)
      .post('/api/sdtdserver/cron/notifications')
      .send({
        jobId: 1,
      })
      .expect(200, done);
  });
});

describe('DELETE /api/sdtdserver/cron/notifications', function () {

  it('should return 200 with valid info', function (done) {
    supertest(sails.hooks.http.app)
      .delete('/api/sdtdserver/cron/notifications')
      .send({
        jobId: 1,
      })
      .expect(200, done);
  });
});

describe('POST /api/sdtdserver/cron/status', function () {

  it('should return 200 with valid info', function (done) {
    supertest(sails.hooks.http.app)
      .post('/api/sdtdserver/cron/status')
      .send({
        jobId: 1,
      })
      .expect(200, done);
  });

  it('should return 400 when no jobId is given', function (done) {
    supertest(sails.hooks.http.app)
      .post('/api/sdtdserver/cron/status')
      .expect(400, done);
  });

});

describe('DELETE /api/sdtdserver/cron/status', function () {

  it('should return 200 with valid info', function (done) {
    supertest(sails.hooks.http.app)
      .delete('/api/sdtdserver/cron/status')
      .send({
        jobId: 1,
      })
      .expect(200, done);
  });

  it('should return 400 when no jobId is given', function (done) {
    supertest(sails.hooks.http.app)
      .delete('/api/sdtdserver/cron/status')
      .expect(400, done);
  });
});


describe('DELETE /api/sdtdserver/cron', function () {

  it('should return 400 when no jobId is given', function (done) {
    supertest(sails.hooks.http.app)
      .delete('/api/sdtdserver/cron')
      .expect(400, done);
  });

  it('should return 200 with valid info', function (done) {
    supertest(sails.hooks.http.app)
      .delete('/api/sdtdserver/cron')
      .send({
        jobId: 1,
      })
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});