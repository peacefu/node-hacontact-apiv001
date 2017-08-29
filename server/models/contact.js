var mongoose = require('mongoose');

var Contact = mongoose.model('Contact', {
    firstname:{
      type: String,
      required: true,
      minlength: 1
    },
    surname: {
      type: String,
      required: true,
      minlength: 1
    },
    postTitle: {
      type: String,
      required: true,
      minlength: 1
    },
    extNo: {
      type: String,
      required: true,
      minlength: 1
    },
    teamNo: {
      type: String,
      required: true,
      minlength: 1
    },
    sectionNo: {
      type: String,
      required: true,
      minlength: 1
    },
    status: {
      type: String
    }
  }
});

module.exports = {Contact};
