"use strict";

// Média Aritmética
function average() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }
  var sum = params.reduce(function (cont, num) {
    return cont + num;
  }, 0);
  return sum / params.length;
}
console.log("M\xE9dia Aritm\xE9tica ".concat(average(5, 3, 2, 9, 8)));

// Média ponderada
var reightedAverage = function reightedAverage() {
  for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }
  var sum = params.reduce(function (cont, _ref) {
    var n = _ref.n,
      p = _ref.p;
    return cont + n * p;
  }, 0);
  var weightSum = params.reduce(function (cont, entry) {
    return cont + entry.p;
  }, 0);
  return sum / weightSum;
};
console.log("Media ponderada ".concat(reightedAverage({
  n: 7,
  p: 2
}, {
  n: 9,
  p: 5
}, {
  n: 3,
  p: 1
})));

// mediana
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(orderNumbers.length / 2);
  var positionOne = orderNumbers[middle - 1];
  var positionTwo = orderNumbers[middle];
  if (orderNumbers.length % 2 !== 0) {
    return orderNumbers[middle];
  }
  return average(positionOne, positionTwo);
};
console.log("O midian \xE9 ".concat(median(15, 14, 8, 7, 3)));
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Moda:  ".concat(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));
