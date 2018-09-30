module.exports = function getZerosCount(number, base) {
  // your implementation
  let primes = [];
  let count = 0;
  let base2 = base;
  let zeros = [];
  let gradesArr = [];
  for (let i = 2; i<= base; i++){
      if(base % i === 0) primes.push(i);
  };
  for (let x = 0; x < primes.length; x++){
      for(let y = x+1; y<=primes.length-1;){
          if(primes[y]%primes[x] === 0){
              primes.splice(y,1);
          } else {y++};
      };
  };
  for(let z = 0; z<primes.length; z++){
      count= 0;
      while(base2 % primes[z] === 0){
          count++;
          base2 /= primes[z];
      };
      gradesArr.push(count);
  };
  for(let r = 0; r<primes.length; r ++){
      let primeCopy = primes[r];
      let sum = 0;
      while(number>=primeCopy){
          sum += Math.floor(number/primeCopy);
          primeCopy *=primes[r];
      };
      let zeroQuantity = Math.floor(sum/gradesArr[r]);
      zeros.push(zeroQuantity); 
  };
  zeros.sort((a,b)=>{
      return a-b;
  });
  let res = zeros[0];
  return res;
}