var yourName = 'Jerome Pratt',
 dateCompleted = '19/01/2015';

// Exercise 1 
function camelCase(string){
  splitString = string.split(" ")
  splitString.forEach(function(word, index, array){
    if (index != 0) {
      array[index] = word.charAt(0).toUpperCase() + word.substring(1, word.length)
    } else {
      array[index] = word.charAt(0).toLowerCase() + word.substring(1, word.length)
    }
  })
  return splitString.join("");
}

// Exercise 2
String.prototype.camelCase = function() {
  splitString = this.split(" ")
  splitString.forEach(function(word, index, array){
    if (index != 0) {
      array[index] = word.charAt(0).toUpperCase() + word.substring(1, word.length)
    } else {
      array[index] = word.charAt(0).toLowerCase() + word.substring(1, word.length)
    }
  })
  return splitString.join("");
}

// Exercise 3
function sum() {
  function masterSum () {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  }
  return masterSum.apply(this, arguments);
}

//Exercise 4

function myMasterSum() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(previousValue, currentValue, index, array){
    return previousValue + currentValue;
  })
}

//Exercise 5

// The output will be 
// a) -> 100
// b) -> undefined because 'this' now refers to global scope when called

// Exercise 6

var Hero = {
  hitPoints: 100,
  getLife: function () {
    return this.hitPoints;
  }
};

var getLife = Hero.getLife;

var LinksLife = getLife.bind(Hero)

// Exercise 7

// Shim for using bind in browsers which don't support it
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP && oThis
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}
