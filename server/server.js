var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Contact} = require('./models/contact');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/contacts',(req, res) => {
  // console.log(req.body);
  var contact = new Contact({

    // firstname: req.body.firstname,
    // surname: req.body.surname,
    // postTitle: req.body.postTitle,
    // extNo: req.body.extNo,
    // teamNo: req.body.teamNo,
    // sectionNo: req.body.sectionNo,
    // status: req.body.status
    firstname: 'Alex',
    surname: 'Tse',
    postTitle: 'SAT/16',
    extNo: '7289',
    teamNo: '23',
    sectionNo: '2',
    status: 'Current'
  });

  contact.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/contacts', (req, res) => {
  Contact.find().then((contacts) => {
    res.send({contacts});
  }, (e) => {
    res.status(400).send(e);
  });
});

//GET /todos/1234123
  //404 - send back empty send
app.get('/contacts/:id', (req, res) => {
  // res.send(req.params);
  var id = req.params.id;

  //valid id using isValid
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }


  //findById
  //success
    //if todo - send it back
    // no todo - send back 404 with empty body
  //error
    //400 - and send empty body back
  Todo.findById(id).then((contact) => {
    if (!contact) {
      return res.status(404).send();
    }
    res.send({contact});
  }).catch((e) => {
    res.status(400).send();
  });
});



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
