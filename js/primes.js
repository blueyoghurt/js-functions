// Prime number is only divisble by one and itself

var myNumber = 8;

function isPrime (number) {
  for (i = 0; i < (number-2); i++) {
    if ((number % (i+2)) === 0) {
      console.log("we are in the function");
      return "not prime";
    }
  } return "prime";
}


console.log(isPrime(myNumber));
