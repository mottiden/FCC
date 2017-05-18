
function pairElement(str) {
  var arr = str.split("");
  str = arr.map(function(el){
    if(el == "C"){return [el,"G"];}
    else if(el == "G"){return [el,"C"];}
    else if(el == "A"){return [el,"T"];}
    else if(el == "T"){return [el,"A"];}
  });
  return str;
}

pairElement("GCG");