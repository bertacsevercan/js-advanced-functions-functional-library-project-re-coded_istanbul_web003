const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      for (let key in collection) {
        callback(collection[key]);
      }
      return collection

    },

    map: function (collection, callback) {
      let newArr = [];
      for (let key in collection) {
        newArr.push(callback(collection[key]));
      }
      return newArr
    },

    reduce: function (collection, callback, acc) {
      if (acc === undefined) {
        acc = collection[0];
        for (let i = 1; i < collection.length; i++){
          acc = callback(acc, collection[i])
        }
        return acc
      } else {
        for (let el of collection) {
          acc = callback(acc, el)
        }
        return acc
      }
    },
    find: function(collection, predicate){
      for(let el of collection){
        if(predicate(el)){
          return el
        }
      }

    },
    filter: function(collection, predicate){
      let newArr = [];
      for(let el of collection){
        if(predicate(el)){
          newArr.push(el);
        }
      }
      return newArr
    },
    size: function(collection){
      let count = 0;
      for(let key in collection){
        count++
      }
      return count
    },
    first: function(array, n){
      if(n === undefined){
        return array[0]
      }
      return array.slice(0,n)

    },
    last: function(array, n){
      if(n === undefined){
        return array[array.length-1]
      }
      return array.slice(array.length - n)

    },
    compact: function(array){
      let newArr = [];
      for(let el of array){
        if(!!el){
          newArr.push(el);

        }
      }
      return newArr
    },
    sortBy: function(array, callback){
      //callback = function(a,b){return b - a} descending
      let res = array.slice()
      return res.sort(function(a, b) {return callback(a) - callback(b)})
    },
    newArr: [],
    flatten: function(array, shallow){
      for(let el of array){
        if(typeof el === "object"){
          this.flatten(el)
        }else if(shallow){
          return [].concat(...array)
        }
        else{
          fi.newArr.push(el)
        }
      }
     return fi.newArr
    },
    uniq: function (array, isSorted, callback) {
      if(callback === undefined){
        let unique = [...new Set(array)];
        return unique 
      }
      else{
      let res = []
      for(let el of array){
        res.push(callback(el))
      }
      let modRes = []
      let unique = []
      for(let i = 0; i< res.length; i++){
        if(modRes.includes(res[i]) === false){
          modRes.push(res[i])
          unique.push(array[i])
        }
      }
      return unique 
    }
    },
    keys: function(object){
      let arr = []
      for(let key in object){
        arr.push(key)
      }
      return arr
    },
    values: function(object){
      let arr = []
      for(let key in object){
        arr.push(object[key])
      }
      return arr
    },
    functions: function (object) {
      let arr = []
      for(let key in object){
        if(typeof object[key] === "function"){
          arr.push(key)
        }
      }
      return arr.sort()
    },
  };
})();

fi.libraryMethod()


const unmodifiedTestObj = { one: 1, two: 2, three: 3, four: 4 }
const unmodifiedTestArr = [1, 2, 3, 4]
const testArr = unmodifiedTestArr.slice()
const testObj = Object.assign({}, unmodifiedTestObj)
//const callback = (x) => (x * 3)
//const arrResult = fi.map(testObj, callback)
//console.log(arrResult)
//console.log(fi.map([1, 2, 3], function(num){ return num * 3; }))
/*
const callback = (acc, val, collection) => (acc + (val * 3))
const reduceWithAcc = fi.reduce(testArr, callback, 10)
const reduceSansAcc = fi.reduce(testArr, callback)

console.log(reduceSansAcc)
*/
/*
console.log(fi.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num) } ));
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
console.log(fi.sortBy(stooges, function(stooge){ return stooge.name }));


const unsortedIntArr = [3, 8, 5, 1, 9, 11, 8]
    const unsortedStringArr = ["maru", "choux", "doge", "coconut"]
    const unsortedObjArr = [
      {name: "dennis", age: 29},
      {name: "dee", age: 40},
      {name: "mac", age: 34},
      {name: "charlie", age: 32},
      {name: "frank", age: 72}
    ]
    const controlSortedObjArr = [
      {name: "dennis", age: 29},
      {name: "charlie", age: 32},
      {name: "mac", age: 34},
      {name: "dee", age: 40},
      {name: "frank", age: 72}
    ]

    function sortArrFunction(val) { return val }
    function sortIntsBySin(val)   { return Math.sin(val) }
    function sortObjFunction(obj) { return obj.age }


    console.log(fi.sortBy(unsortedIntArr, sortArrFunction)) */
//console.log(fi.flatten([1, [2], [3, [[4]]]],true))
//console.log(fi.flatten([1, [2, 3], [[4, 5], 6, [7, [8, 9]]]]))
//console.log(fi.uniq([1, 2, 1, 4, 1, 3]));
//console.log(fi.uniq(['a', 'a', 'b', 'c', 'e', 'e', 'e', 'e'], true));

console.log(fi.uniq([1, 2, 3, 6], false, (x => x % 3)));
console.log(fi.uniq([4,8,6,5,7], false, (x => x % 3)));
