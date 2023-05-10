const request = require('supertest');
const app = require('../server');

beforeEach(()=>{
    console.log("Testing Start", new Date());
});

afterEach(()=>{
    console.log("Testing Finish", new Date());
});

describe(`Test the CRUD API's`, () => {
    try {
        // Create User
        it('Create', (done) => {
            let data = {
                name: "Deep", 
                email: "deep@yopmail.com", 
                password: "Deep@123", 
                confirm_password: "Deep@123"
            }
            request(app)
            .post('/api/v1/user-registration')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err){       
                    let respo = (res.text)? JSON.parse(res.text)?.errormsg: err;
                    return done(respo);
                }        
                // let resp = JSON.parse(res.text);
                return done();
            });
        });

        // User Lists
        it('Lists', (done) => {
            request(app)
            .get(`/api/v1/get-user-lists`)
            .set('Accept', 'application/json')        
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err){
                    return done(err);
                }
                // let resp = JSON.parse(res.text);
                return done();
            });
        });

        // User Details
        it('Details', (done) => {
            let userId = 3;
            request(app)
            .get(`/api/v1/get-user-details/${userId}`)
            .set('Accept', 'application/json')        
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err){
                    return done(err);
                }
                // let resp = JSON.parse(res.text);
                return done();
            });
        });

        // Update User
        it('Update', (done) => {
            let userId = 3;
            request(app)
            .put(`/api/v1/update-user-details/${userId}`)
            .send({ name: 'Test User' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err){       
                    let respo = (res?.text)? JSON.parse(res?.text)?.errormsg: err;
                    return done(respo);
                }        
                // let resp = JSON.parse(res.text);
                return done();
            });
        });

        // Delete User
        it('should delete the created resource', (done) => {
            let userId = 3;
            request(app)
            .delete(`/api/v1/delete-user/${userId}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err){       
                    let respo = (res.text)? JSON.parse(res.text)?.errormsg: err;
                    return done(respo);
                }        
                // let resp = JSON.parse(res.text);
                return done();
            });
        });

    }
    catch(err){
        console.log(`Final Catch Error!`, err.message);
    }
});
