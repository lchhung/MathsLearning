export function DivTestArrayData() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  randomNums = Math.floor(Math.random() * 9) + 1;
  var originalArray = [];
  for (var i = 1; i <= 10; i++) {
    originalArray.push(i);
  }
  var buttonArray = [];
  for (var j = 0; j < 4; j++) {
    var random = getRandomInt(10 - j);
    buttonArray.push(originalArray[random]);
    originalArray.splice(random, 1);
  }
  var buttonArrayNum = buttonArray[Math.floor(Math.random() * buttonArray.length)];

  var testAnswer = buttonArrayNum * randomNums;
  var compareNums = buttonArrayNum;
  return { randomNums, originalArray, buttonArray, buttonArrayNum, testAnswer, compareNums };
}