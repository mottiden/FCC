function translatePigLatin(str) {
  var vowels = new RegExp("[aeiou]",'gi');
  var consonants = new RegExp("[^aeiou]",'gi');
  var twoConsonants = new RegExp("[^aeiou]{2}",'gi');
  if(str.charAt(0).match(vowels) !== null){ return str+'way';}
  if(str.charAt(0).match(consonants) !== null && str.charAt(1).match(vowels) !== null){ 
    return str.substr(1)+str.charAt(0)+'ay';}
  if(str.charAt(0).match(consonants) !== null && str.charAt(1).match(consonants) !== null){
    return str.substr(2)+str.charAt(0)+str.charAt(1)+'ay';}
  return str;
}

translatePigLatin("glove");