
const nameAlreadyExists = (persons, newName) => {
  return persons
    .map(person => person.name.toLowerCase())
    .some(name => name.localeCompare(newName.toLowerCase()) === 0);
};

module.exports = {
  nameAlreadyExists
};