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
  return countCats;
}

const countDogs = dogHouse();
const countCats = catHouse();

countDogs(); // "1 dogs"
countDogs(); // "2 dogs"
countDogs(); // "3 dogs"

countCats(); // "1 cats"
countCats(); // "2 cats"

countDogs(); // "4 dogs"

