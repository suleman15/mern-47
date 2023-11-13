let array = [53, 23, 23, 23, 234, 23];

//===========================================
//===========================================
//===========================================
// Custom Every

const customEvery = (arr, every) => {
  for (let i = 0; i < arr.length; i++) {
    if (!every(arr[i])) return false;
  }
  return true;
};
console.log(customEvery(array, (item) => item >= 5));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
Array.prototype.customEvery = function (every) {
  for (let i = 0; i < this.length; i++) {
    if (!every(this[i])) {
      return false;
    }
  }
  return true;
};

console.log(array.customEvery((item) => item > 20));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

//===========================================
//===========================================
//===========================================
//===========================================
// Custom Some
const customSome = (arr, some) => {
  for (let i = 0; i < arr.length; i++) {
    if (some(arr[i])) return true;
  }
  return false;
};

console.log(customSome(array, (item) => item > 36));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

Array.prototype.customSome = function (some) {
  for (let i = 0; i < this.length; i++) {
    if (some(this[i])) {
      return true;
    }
  }
  return false;
};
console.log(array.customSome((item) => item < 23));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

//===========================================
//===========================================
//===========================================

//Custom Reduce
const customReduce = (arr, reducer, initialized) => {
  for (let i = 0; i < arr.length; i++) {
    initialized = reducer(initialized, arr[i]);
  }
  return initialized;
};

console.log(customReduce(array, (prev, current) => prev + current, 60));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

Array.prototype.customReducer = function (reducer, intializedValue) {
  for (let i = 0; i < this.length; i++) {
    intializedValue = reducer(intializedValue, this[i]);
  }
  return intializedValue;
};

console.log(array.customReducer((prev, current) => prev + current, 0));
