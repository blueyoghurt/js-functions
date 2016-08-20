var input = "This is a statement";
var alphabet = "a";

function tally(alphabet){
  var count = 0;
  for ( i = 0 ; i<input.length; i++ ){
      console.log(input[i]);
      console.log(alphabet);
      if (alphabet === input[i]){
        count ++ ;
        console.log("We found a A");
      } return count;
  }
}

console.log("There are", tally(alphabet), alphabet, "in the string" );
