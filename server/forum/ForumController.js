var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require(__root + 'auth/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Forum = require('./Forum');

router.post('/', function (req, res) {

    console.log("POST FORUM");
    console.log(req.body.heading)
    Forum.create({
            heading : req.body.heading,
            description : req.body.description,
            createdBy : 'Atul'
        }, 
        function (err, forum) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(forum);
        });
});

router.get('/list', function(req, res){
    Forum.find({}, function(err, list){
        if(err) return res.status(500).send('There is problem on listing');

        res.status(200).send(list)
    })
})


module.exports = router;