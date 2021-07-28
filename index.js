const express = require('express');
const app = express();

const PORT = 3001;

app.use(express.json());

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
];


app.get('/info', (req, res) => {
  let info = `Phonebook has info for ${persons.length} people`;
  let time = new Date();
  res.send(`<p>${info}</p><p>${time}</p>`);
});


app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const requestedId = Number(req.params.id);

  const person = persons.find(person => person.id === requestedId);
  if(person) res.status(200).json(person);
  else res.status(404).json({
    'Error': 'Person not found'
  });
});

app.delete('/api/persons/:id', (req, res) => {
  const requestedId = Number(req.params.id);

  persons = persons.filter(person => person.id !== requestedId);
  res.status(204).end();
});


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});