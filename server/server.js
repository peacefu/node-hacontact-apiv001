var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Contact} = require('./models/contact');

var cors = require('cors');

var app = express();
const port = process.env.PORT || 3000;

//app.use(cors({origin: '*'}));
app.use(cors());

app.use(bodyParser.json());

app.post('/contacts',(req, res) => {
  // console.log(req.body);
  var contact = new Contact(
    {
      eng_name: 'Jimmy Lam',
      post: 'SITM/D',
      phone_no: '2761-5886',
      team_no: 'N/A',
      section_no: '2',
      firstname: 'Cheuk Ming',
      surname: 'Lam',
      last_update_date: '2017-09-01'
    }
  );

  contact.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });

  var contact2 = new Contact(
    {
      eng_name: 'Edna Tam',
      post: 'ITM/23',
      phone_no: '2761-6315',
      team_no: '23',
      section_no: '2',
      firstname: 'Yuen Har',
      surname: 'Tam',
      last_update_date: '2017-09-01'
    }
  );

  contact2.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });

  var contact3 = new Contact(
    {
      eng_name: 'John Cheung',
      post: 'SAC/30',
      phone_no: '2761-6579',
      team_no: '23',
      section_no: '2',
      firstname: 'Kim Hung',
      surname: 'Cheung',
      last_update_date: '2017-09-01'
    }
  );

  contact3.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });

  var contact4 = new Contact(
    {
      eng_name: 'Alice Li',
      post: 'SAC/35',
      phone_no: '2761-7834',
      team_no: '23',
      section_no: '2',
      firstname: 'Yat Hung',
      surname: 'Li',
      last_update_date: '2017-09-01'
    }
  );

  contact4.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });

  var contact5 = new Contact(
    {
      eng_name: 'Alex Tse',
      post: 'SAT/16',
      phone_no: '2761-7289',
      team_no: '23',
      section_no: '2',
      firstname: 'Chun Hin',
      surname: 'Tse',
      last_update_date: '2017-09-01'
    }
  );

  contact5.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });

  var contact6 = new Contact(
    {
      eng_name: 'Mak Wong',
      post: 'PC/43',
      phone_no: '2761-7456',
      team_no: '23',
      section_no: '2',
      firstname: 'Kam Fat',
      surname: 'Wong',
      last_update_date: '2017-09-01'
    }
  );

  contact6.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });

  var contact7 = new Contact(
    {
      eng_name: 'Yozki Yiu',
      post: 'PC/46',
      phone_no: '2761-7509',
      team_no: '23',
      section_no: '2',
      firstname: 'Chi Fu',
      surname: 'Yiu',
      last_update_date: '2017-09-01'
    }
  );

  contact7.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/contacts', (req, res) => {
  Contact.find().then((contacts) => {
    res.send(contacts);
  }, (e) => {
    res.status(400).send(e);
  });
});

//GET /todos/1234123
  //404 - send back empty send
// app.get('/contacts/:id', (req, res) => {
//   // res.send(req.params);
//   var id = req.params.id;

//   //valid id using isValid
//   if (!ObjectID.isValid(id)) {
//     return res.status(404).send();
//   }


  //findById
  //success
    //if todo - send it back
    // no todo - send back 404 with empty body
  //error
    //400 - and send empty body back
//   Todo.findById(id).then((contact) => {
//     if (!contact) {
//       return res.status(404).send();
//     }
//     res.send({contact});
//   }).catch((e) => {
//     res.status(400).send();
//   });
// });

//
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// });
//
// var otherTodo = new Todo({
//   text: '     Feed the cat'
// });
// otherTodo.save().then((doc) => {
//   console.log('Saved othertodo');
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save othertodo')
// });
// var otherTodo = new Todo({
//   text: '     Feed the cat'
// });
//
// var user = new User({
//   email: '  peace@fu.com'
// });
// user.save().then((doc) => {
//   console.log('Save user');
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save user')
// });
