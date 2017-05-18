function sumPrimes(num) {
  var arr=[];
  var divisors=[];
  var prime=[];
  
  for(var i=0;i<=num;i++){
    arr.push(i);
  }
  for(var j=1;j<=arr.length-1;j++){
    divisors[j]=arr.filter(function(el){
      return arr[j]%el===0;
    });
  }
  console.log(divisors);
  
  prime=divisors.filter(function(el){
      if(el.length==2){return el;}
    });
  
  prime = prime.map(function(el,i){
    return el[1];
  });
  console.log(prime);

  num = prime.reduce(function(sum,el){
    return sum + el;
  },0);
  return num;
}


sumPrimes(10);