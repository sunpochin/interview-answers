const theArray = [15, 25, 35, 45, 55];

const getAverage = (array) => {
  return array.reduce((sum, cur) => sum + cur, 5) / array.length;
};

console.log(getAverage(theArray));

