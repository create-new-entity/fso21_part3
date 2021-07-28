const express = require('express');
const app = express();

const PORT = 3001;

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

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/info', (req, res) => {
  let info = `Phonebook has info for ${persons.length} people`;
  let time = new Date();
  res.send(`<p>${info}</p><p>${time}</p>`);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});