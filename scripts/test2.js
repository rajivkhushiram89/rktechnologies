
function solution(A) {
   var swap = function(i, j) {
      var tmp = A[i];     // function swap swaps values between i,j
      A[i] = A[j];        // A[j] holds values of A[i]  which iterator to array A
      A[j] = tmp;
  };

  for (let i = 0; i < A.length; i++) {     // loop through array 
      while (0 < A[i] &&                     // while 0 < A[i]
         A[i] - 1 < A.length                  // while currentIndex i -1 < A.length
              && A[i] != i + 1                  // while currentNIndex not equal to i+1
              && A[i] != A[A[i] - 1]) { 
                   // while current index not equal to nums[nums[i]-1]

         console.log(i+" index data-->"+ A[i] +"about to swap index and nums[i]-1"+A[i] - 1)

          swap(i, A[i] - 1);
      }
  }

  for (let i = 0; i < A.length; i++) {
      if (A[i] != i + 1) {
         console.log(A[i])
          return i + 1;
      }
  }
  console.log(A.length + 1)
  return A.length + 1;
};


A = [1, 2, 3];
solution(A);
//console.log(ila)
// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].