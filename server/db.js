var mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017');
mongoose.connect('mongodb://admin:Admin123@ds115442.mlab.com:15442/consumerforum',{ useMongoClient: true}, function(err){
	if(err)console.log(err);
	console.log('DB connected')
});

