const mongoose = require("mongoose");

const password = process.argv[2];
const DB_URL = `mongodb+srv://imran_pavel:${password}@gp1.k5n8r.mongodb.net/test?retryWrites=true&w=majority`;
const DB_CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

mongoose
  .connect(DB_URL, DB_CONFIG)
  .then(() => {
    console.log('DB Connected');
  })
  .catch(err => {
    console.log(err);
  });


const personSchema = new mongoose.Schema({
  id: Number,
  name: String,
  number: String
});

const Person = mongoose.model('Person', personSchema);
if (process.argv.length === 3) {
  Person
    .find({})
    .then( people => {
      console.log('phonebook:');
      people.forEach(person => console.log(person));
      mongoose.connection.close();
      process.exit(1);
    });
}
else if (process.argv.length === 5) {
  const newPersonData = {
    name: process.argv[3],
    number: process.argv[4]
  };
  
  const newPerson = new Person(newPersonData);
  
  newPerson
    .save()
    .then(result => {
      console.log(`Added ${result.name} number ${result.number} to phonebook`);
      mongoose.connection.close();
    });
}
else {
  mongoose.connection.close();
}



