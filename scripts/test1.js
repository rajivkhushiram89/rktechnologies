

// function solution(A) {
//   var arrayla = [];

//   // loop through All items in A 
//   for (i = 0; i < A.length; i++) {
//     for (j = i + 1; j < A.length; j++) {
//       var sumInstance = A[i] + A[j];
//       arrayla.push(sumInstance);
//       //  console.log(A[j])
//     }
//   }

//   //loop and find min  if min
//   var i = 0;
//   while (arrayla[i]) {
//     console.log(arrayla[i])
//     console.log(A.includes(arrayla[i]))


//     i++;
//   }
// 

let recursiveFunction = function (arr, x, start, end) { 
       
  // Base Condtion 
  if (start > end) return false; 
 
  // Find the middle index 
  let mid=Math.floor((start + end)/2); 
 
  // Compare mid with given key x 
  if (arr[mid]===x) return true; 
        
  // If element at mid is greater than x, 
  // search in the left half of mid 
  if(arr[mid] > x)  
      return recursiveFunction(arr, x, start, mid-1); 
  else

      // If element at mid is smaller than x, 
      // search in the right half of mid 
      return recursiveFunction(arr, x, mid+1, end); 
} 


var gcd = function(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}
/*
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohi


*/
function solution(A) {
  // smallest positive sum between addition of two n, n+1  which also does not share  a cofactor with an element in the array
  // doesSumShareCoPrimeElementinArray
  //getsortedArray
  let arrayla = [];
  arrayofPositive  = []
  sumArray = [];
  let i  = 0;
  for (i = 0; i < A.length; i++) {
    for (j = i + 1; j < A.length; j++) {
      var positiveSums = { initialI: A[i], initialJ: A[j], sum: A[i] + A[j] };
      sumArray.push(positiveSums);
    }
  }
  var sortedSumarray = sumArray.sort(function(a, b) {
    return parseFloat(a.sum) - parseFloat(b.sum);
  });
 // console.log(sortedSumarray);
  for (k = 0; k < sortedSumarray.length; k++) {
    //console.log(sortedSumarray[k])
    //console.log(sortedSumarray[k].sum)
    arrayofPositive.push(sortedSumarray[k].sum)

}


console.log(arrayofPositive)

  for (b = 0; b < arrayofPositive.length; b++){
    if (!A.includes(arrayofPositive[b])){
       return arrayofPositive[b];
    }
}
}

// loop through array of positives


// returns true if sum has coprime in list
// if  positive number is  even return and A.includes(2) return false go to l++
// and shares a coprime with element in A


let arr =  [-1, -3];

var kok = solution(arr)

console.log(kok)
 
// let totalArray = 
// let x = 4; 
   

// if (recursiveFunction(arr, x, 0, arr.length-1)) 
//     console.log('search was found')
// else console.log('search was not found')
   
// x = 3; 
   
// if (recursiveFunction(arr, x, 0, arr.length-1)) 
// console.log('search was found')
// else console.log('search was not found')


