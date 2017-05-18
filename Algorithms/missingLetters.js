/*jshint esversion:6*/
function fearNotLetter(str) {
  str = str.split("");
  str = str.map(function(el){
    return el.charCodeAt();
  });
  var interval = [];
  for(var i=str[0];i<=str[str.length-1];i++){
    interval.push(i);
  }
  var found = [];
  str.forEach(function (item,i) {
    if(item != interval[i]){found.push(interval[i]);}
  });
  if(found.length === 0){return undefined;}
  else {return String.fromCharCode(found[0]);}
}

fearNotLetter("abc");