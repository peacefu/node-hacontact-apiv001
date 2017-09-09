var mongoose = require('mongoose');

// last_name: LastName,
//   given_name: GivenName,
//     middle_name: MiddleName,
//       post: Post,
//         division: Division,
//           subdivision: Subdivision,
//             section: Section,
//               mail: Mail,
//                 title: Title,
//                   phone: Phone 

var Contact = mongoose.model('Contact', {
  last_name: {
    type: String
  },
  given_name: {
    type: String
  },
  middle_name: {
    type: String
  },
  post: {
    type: String
  },
  division: {
    type: String
  },
  subdivision: {
    type: String
  },
  section: {
    type: String
  },
  mail: {
    type: String
  },
  title: {
    type: String
  },
  phone: {
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
