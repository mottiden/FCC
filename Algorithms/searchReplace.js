function myReplace(str, before, after) {
  if(before.charAt(0) == before.charAt(0).toUpperCase()){
    after = after.replace(after.charAt(0),after.charAt(0).toUpperCase());
  } 
  var expr = new RegExp(before,'gi');
  str = str.replace(expr,after);
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");