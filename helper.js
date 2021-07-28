const maxId = 5000;

const getRandomId = (existingIds) => {
  while(true){
    let newRandomId = Math.floor(Math.random() * maxId);
    let alreadyExists = existingIds.includes(newRandomId);
    if(!alreadyExists) return newRandomId;
  }
};

const nameAlreadyExists = (persons, newName) => {
  return persons
    .map(person => person.name.toLowerCase())
    .some(name => name.localeCompare(newName.toLowerCase()) === 0);
};

module.exports = {
  getRandomId,
  nameAlreadyExists
};