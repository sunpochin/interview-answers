function dogHouse() {
  var count = 0;
  function countDogs() {
    count += 1;
    console.log(count + ' dogs');
  }
  return countDogs;
}

function catHouse() {
  var count = 0;
  function countCats() {
    count += 1;
    console.log(count + ' cats');
  }
  return countCats
}

function createCounter(name) {
  var count = 0;
  function countAnimal() {
    count += 1;
    console.log(count + ' ' + name);
  }
  return countAnimal;
}

const countDogs = createCounter('dogs');
const countCats = createCounter('cats');
countDogs();
countDogs();
countDogs();
countCats();
countCats();
countDogs();

// const countDogs = dogHouse();
// const countCats = catHouse();

// countDogs(); // "1 dogs"
// countDogs(); // "2 dogs"
// countDogs(); // "3 dogs"

// countCats(); // "1 cats"
// countCats(); // "2 cats"

// countDogs(); // "4 dogs"


