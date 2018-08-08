var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require('./VerifyToken');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../user/User');

var jwt = require('jsonwebtoken'); 
var bcrypt = require('bcryptjs');
var config = require('../config');

// For login user

router.post('/login', function(req, res) {

  console.log("Login");
  console.log(req.body.email);
  
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 
    });

    res.status(200).send({ auth: true, token: token });
  });

});


router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});


router.post('/register', function(req, res) {

  console.log('Register')
  // console.log(req.body)

  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  // console.log(User);
  User.findOne({ email: req.body.email }, function (err, user) {

    if (err) return res.status(500).send('Error on the server.');
    
    if (!user){

      User.create({
        mobile : req.body.mobile,
        email : req.body.email,
        password : hashedPassword,
        role:'User'
      }, 
      function (err, user) {
        if (err) return res.status(500).send("There was a problem registering the user`.");

        var token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400 
        });

        res.status(200).send({ auth: true, token: token });
      });
      }else{
        res.status(200).send({ msg:"User Already Exits" });
      }
    

  });


});




router.get('/me', VerifyToken, function(req, res, next) {

  console.log(req.userId)
  User.findById(req.userId, { password: 0 }, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });

});

module.exports = router;