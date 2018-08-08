var mongoose = require('mongoose');  
var ForumSchema = new mongoose.Schema({  
  heading: String,
  description: String,
  status: String,
  createdBy: String,
  created_at    : { type: Date }, 
  updated_at    : { type: Date }
});

mongoose.model('Forum', ForumSchema);

module.exports = mongoose.model('Forum');