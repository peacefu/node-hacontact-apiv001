// eng_name: string,
//   post: string,
//     phone_no: string,
//       team_no: string,
//         section_no: string,
//           firstname: string,
//             surname: string,
//               last_update_date: string

var mongoose = require('mongoose');

var Contact = mongoose.model('Contact', {
  eng_name: {
    type: String
  },
  post: {
    type: String
  },
  phone_no: {
    type: String
  },
  team_no: {
    type: String
  },
  section_no: {
    type: String
  },
  firstname: {
    type: String
  },
  surname: {
    type: String
  },
  last_update_date: {
    type: String
  }
});

module.exports = { Contact };

// var mongoose = require('mongoose');

// var Contact = mongoose.model('Contact', {
//     firstname:{
//       type: String
//       // ,
//       // required: true,
//       // minlength: 1
//     },
//     surname: {
//       type: String
//       // ,
//       // required: true,
//       // minlength: 1
//     },
//     postTitle: {
//       type: String
//       // ,
//       // required: true,
//       // minlength: 1
//     },
//     extNo: {
//       type: String
//       // ,
//       // required: true,
//       // minlength: 1
//     },
//     teamNo: {
//       type: String
//       // ,
//       // required: true,
//       // minlength: 1
//     },
//     sectionNo: {
//       type: String
//       // ,
//       // required: true,
//       // minlength: 1
//     },
//     status: {
//       type: String
//     }
// });

// module.exports = {Contact};
