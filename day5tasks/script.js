
//odd numbers using annonymous function

var arr=[1,2,3,4,5,6,7,8,9]

      var oddnumbers=function(){
        for( let i=0;i<arr.length;i++){
            if(arr[i]%2!=0)
            console.log(arr[i])  
        }} 

        oddnumbers()

 //odd numbers using iife function
 
   
       (function (){
        var arr=[1,2,3,4,5,6,7,8,9]
         for( let i=0;i<arr.length;i++){
         if(arr[i]%2!=0){
          console.log(arr[i]);
         }
        }}) 
        ();
      
  //odd numbers using arrow function
  
  var arr=[1,2,3,4,5,6,7,8,9]
  var oddnumbers= ()=>{
     for( let i=0;i<arr.length;i++){
       if(arr[i]%2!=0)
     console.log(arr[i])
   }} 
     oddnumbers()

// strings to tittle caps using annonymous function

var str = ['john', 'petter', 'mike', 'smith','david']
      var uppercase=function(){
        for(let i=0; i<str.length; i++){
         var string=(str[i].toUpperCase())
         console.log(string);
        }
      }
      uppercase()

 // strings to tittle caps using iife function
 

     (function (){
     var str = ['john', 'petter', 'mike', 'smith', 'david']
     for (let i=0; i<str.length; i++){
        var string=(str[i].toUpperCase())
        console.log(string);
     }
     })
     ();


// strings to tittle caps using arrow function

var str = ['john', 'petter', 'mike', 'smith', 'david']
     var uppercase=()=>{
        for (let i=0; i<str.length; i++){
        var string=(str[i].toUpperCase())
           console.log(string);
             }}
            uppercase();


// sum of all numbers in an array using annonymous function

var arr=[1,2,3,4,5,6,50,100];
       var sum=0;
        var total=function(){
        for(let i=0;i<arr.length;i++){
            sum=sum+arr[i];
        }
            console.log(sum);
            return sum;
        }
        total();


// sum of all numbers in an array using iife function
      
      (function (){
        var arr=[1,2,3,4,5,6,50,100];
        var sum=0;
       for(let i=0;i<arr.length;i++){
         sum=sum+arr[i];
           }
            console.log(sum);
         })
         ();

    

// sum of all numbers in an array using arrow function

    var arr=[1,2,3,4,5,6,50,100];
    var sum=0;
    var total=()=>{
        for(let i=0;i<arr.length;i++){
            sum=sum+arr[i];
        }
        console.log(sum);
        }
         total();


 // return all the prime numbers in an array usring annonymous function

 var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 
 var prime= function (num) {
  for (let i = 2; i<num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(arr.filter(prime))
prime();



 // return all the prime numbers in an array usring iife function

 

 ( function (num) {
 var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 
  for (let i = 2; i<num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return prime= num > 1;

})
();



 // return all the prime numbers in an array usring arrow function

var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

arr = arr.filter((number) => {
for (var i = 2; i <= Math.sqrt(number); i++) {
if (number % i === 0) 
return false;
}
return true;
})
// console.log(arr);
 
 
// return all the pallindromes in an array using annonymous function


var words = ['food','racecar','pineapple','mom','madam']
   var arr = []
   var pallindrome =function(){
   var str = words.slice(0) 
   var pal = str.toString().split("").reverse().join("").split(",")

for (let i = 0; i < words.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (words[i] == pal[k]) {
      arr.push(words[i])
    }
  }
}
console.log(arr);
   }
   pallindrome()


// return all the pallindromes in an array using iife function


   (function(){
    var words = ['food','racecar','pineapple','mom','madam']
    var arr = []
   var str = words.slice(0) 
   var pal = str.toString().split("").reverse().join("").split(",")

for (let i = 0; i < words.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (words[i] == pal[k]) {
      arr.push(words[i])
    }
  }
}
console.log(arr);
   })
   ();


   // return all the pallindromes in an array using arrow function

   var words = ['food','racecar','pineapple','mom','madam']
   var arr = []
   var pallindrome= ()=>{
   var str = words.slice(0) 
   var pal = str.toString().split("").reverse().join("").split(",")

for (let i = 0; i < words.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (words[i] == pal[k]) {
      arr.push(words[i])
    }
  }
}
console.log(arr);
   }
   pallindrome()


// return median of two sorted array using annonymous function

var getMedian= function(ar1, ar2, n)
    {
    let j = 0;
    let i = n - 1;
    while (ar1[i] > ar2[j] && j < n && i > -1)
    {
        let temp = ar1[i];
        ar1[i] = ar2[j];
        ar2[j] = temp;
        i--; j++;
    }
    ar1.sort(function(a, b){return a - b});
    ar2.sort(function(a, b){return a - b});
    return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
    }
     
    let ar1 = [ 1, 12, 15, 26, 38 ];
    let ar2 = [ 2, 13, 17, 30, 45 ];
 
    let n1 = 5;
    let n2 = 5;
    if (n1 == n2){
    console.log("Median is "+ getMedian(ar1, ar2, n1));
    }


    // return median of two sorted array using iife function
   
    var getMedian=function(ar1, ar2, n)
    {
    let j = 0;
    let i = n - 1;
    while (ar1[i] > ar2[j] && j < n && i > -1)
    {
        let temp = ar1[i];
        ar1[i] = ar2[j];
        ar2[j] = temp;
        i--; j++;
    }
    ar1.sort(function(a, b){return a - b});
    ar2.sort(function(a, b){return a - b});
    return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
    }
     
    let ar1 = [ 1, 12, 15, 26, 38 ];
    let ar2 = [ 2, 13, 17, 30, 45 ];
 
    let n1 = 5;
    let n2 = 5;
    if (n1 == n2)
    console.log("Median is "+ getMedian(ar1, ar2, n1));
    (getMedian)
    
  
    // remove duplicates from an array using annonymous function

    var arr=["john","peter","paul","john", "mary","peter"];
    function removeDuplicates(arr) {
     return arr.filter((item,index) => arr.indexOf(item) === index);
    }
 
    console.log(removeDuplicates(arr));


    // remove duplicates from an array using iife function
 
    var arr=["john","peter","paul","john","mary","peter"];
      function removeDuplicates(arr) {
        return [...new Set(arr)];
    }
      console.log(removeDuplicates(arr));

    
  // rotate an array by k times using annonymous function

  var rotation=function(){
    var arr=[1,2,3,4,5], d=4;
  for(var i=d;i<arr.length;i++){
    arr.unshift(arr.pop());
    console.log(arr);
  }
   }
   rotation()


//  rotate an array by k times using iife function

(function(arr){
  var arr=[1,2,3,4,5], d=4;
for(var i=d;i<arr.length;i++)
 arr.unshift(arr.pop());
 console.log(arr);
 }
)
 ();


