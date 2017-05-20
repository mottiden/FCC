
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/([a-z])(?=[A-Z])/g,'$1 ');
  str = str.toLowerCase().replace(/ /gi,"-");
  str = str.replace(/_/gi,"-");
  
  return str;
}

spinalCase('thisIsSpinalTap');