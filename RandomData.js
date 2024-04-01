// Function to generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random data array of length 5
function generateRandomDataArray() {
  const dataArray = [];
  for (let i = 0; i < 5; i++) {
    const randomNumber = getRandomInt(0, 100);
    dataArray.push(randomNumber);
  }
  return dataArray;
}

// Example usage
// const randomData = generateRandomDataArray();
// console.log(randomData);

export default generateRandomDataArray;
