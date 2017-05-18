/*jshint esversion:6*/
function addTogether() {
  if(typeof(arguments[0])!=="number") return undefined;
  
  if(arguments.length==2){
    if(typeof(arguments[1])!=="number") return undefined;
    return arguments[0]+arguments[1];}
  
  var add = arguments[0];
  return function(){
    if(typeof(arguments[0])!=="number") return undefined;
    return add + arguments[0];
  };
}

addTogether(2)([3]);