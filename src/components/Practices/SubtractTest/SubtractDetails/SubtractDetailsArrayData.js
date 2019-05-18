export function SubtractDetailsArrayData(val) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  var originalArray = [];
  for (var i = 1; i <= val; i++) {
    originalArray.push(i);
  }
  var buttonArray = [];
  for (var j = 0; j < 4; j++) {
    var random = getRandomInt(val - j);
    buttonArray.push(originalArray[random]);
    originalArray.splice(random, 1);
  }
  //collect a value from button for subtracting
  var buttonArrayNum = buttonArray[Math.floor(Math.random() * buttonArray.length)];
  // Limit the random value to max of passedValue
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var randomNums = getRandomArbitrary(buttonArrayNum, val);
  
  var testAnswer = randomNums - buttonArrayNum;
  var compareNums = buttonArrayNum;
  return { randomNums, originalArray, buttonArray, buttonArrayNum, testAnswer, compareNums };
}