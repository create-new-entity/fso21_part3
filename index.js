require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dbFns_Person = require('./models/person');
const app = express();

const helperFns = require('./helper');
const Person = require('./models/person');

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
morgan.token('request-data', (req, res) => {
  return JSON.stringify(req.body);
});
morgan.format('mytiny', ':method :url :status :res[content-length] - :response-time ms  :request-data');
app.use(morgan('mytiny'));
app.use(express.static('build'));

app.get('/api/persons/reset_db', (req, res) => {
  dbFns_Person
    .resetPersons()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json({
        'err': err.message
      });
    });
});


app.get('/info', (req, res) => {
  dbFns_Person.getNumberOfContacts()
    .then(numberOfContacts => {
      let info = `Phonebook has info for ${numberOfContacts} people`;
      let time = new Date();
      res.status(200).send(`<p>${info}</p><p>${time}</p>`);
    })
    .catch(err => {
      console.log(err.message);
      res.status(500).end();
    });
});


app.get('/api/persons', (req, res) => {
  dbFns_Person.getAllPersons()
    .then(people => {
      res.json(people);
    })
    .catch(err => {
      console.log(err.message);
      res.status(500).end();
    });
});

app.get('/api/persons/:id', (req, res) => {
  const requestedId = req.params.id;
  dbFns_Person.findPersonById(requestedId)
    .then(person => {
      if(!person) res.status(404).end();
      else res.status(200).json(person)
    })
    .catch(err => {
      console.log(err.message);
      res.status(500).end();
    });
});

app.delete('/api/persons/:id', (req, res) => {
  return dbFns_Person.deletePersonsById(req.params.id)
    .then( _ => {
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).end();
    });
});

app.post('/api/persons', (req, res) => {
  const newName = req.body.name;
  const newNumber = req.body.number;

  if(!newName || !newNumber){
    res.status(400).json({
      'Error': 'Name and/or Number missing'
    });
    return;
  }

  dbFns_Person.getAllPersons()
    .then(persons => {
      let nameAlreadyExists = helperFns.nameAlreadyExists(persons, newName);
      if(nameAlreadyExists) {
        res.status(400).json({
          'Error': 'Person already exists'
        });
        return;
      }

      const newPerson = {
        name: newName,
        number: newNumber
      };

      return dbFns_Person.createNewPerson(newPerson)
        .then(newPerson => {
          res.status(201).json(newPerson);
        })
        .catch(err => {
          console.log(err.message);
          res.status(500).end();
        });
    })
    .catch( err => {
      console.log(err.message);
      res.status(500).end();
    });
});

app.put('/api/persons/:id', (req, res) => {
  const target_id = req.params.id;

  dbFns_Person.updateNumberOfContact(target_id, req.body.number)
    .then(updatedContact => res.status(200).json(updatedContact))
    .catch(err => {
      console.log(err.message);
      res.status(500).end();
    });
});


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});