/*jshint esversion: 6 */ 
function steamrollArray(arr) {
  arr = arr.reduce(function(a,el){
    return a.concat(Array.isArray(el) ? steamrollArray(el) : el);
  },[]);

  return arr;
}

steamrollArray([1, {}, [3, [[4]]]]);