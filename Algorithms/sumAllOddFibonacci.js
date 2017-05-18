function sumFibs(num) {
  
  var fibonacci = []; 
  fibonacci[0] = 1; 
  fibonacci[1] = 1; 
  
  for(var i=2;i<=num;i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    if(fibonacci[i]/num>=1) break;
  }

  fibonacci = fibonacci.filter(function(el){
    return el<=num;
  });
  
  console.log("fibonacci:",fibonacci);
  //extract only the odd numbers from fibonacci
  fibonacci = fibonacci.filter(function(el){
    return el%2 !== 0;
  });
  //sum them with reduce   
  num = fibonacci.reduce(function(tot, el){
    return tot + el;
  },0);
  
  return num;
}

sumFibs(1000);
