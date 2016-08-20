var numberList = [1 ,2 ,3 ,4 ,5 ];
var count = 0;

for (i = 0; i< numberList.length; i++){
    count += i * numberList[i];
}

console.log (count);
