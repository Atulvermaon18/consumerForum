var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  mobile: String,
  email: String,
  password: String,
  role: String    // A user can login as an agent or customer. The account type(customer or agent) should be determined based on the info stored in the DB.
});
mongoose.model('User', UserSchema);
 // A user can signup as a customer using his email, mobile number and password.

module.exports = mongoose.model('User');