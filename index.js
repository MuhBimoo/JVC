function generateRandomArray(length, min, max) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
    }
    return randomArray;
}
let randomArray = generateRandomArray(100, 1, 50);
console.log("Array dengan jumlah index 100:", randomArray);

function splitArray(arr) {
    let evenArray = [];
    let oddArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        evenArray.push(arr[i]);
      } else {
        oddArray.push(arr[i]);
      }
    }
    return { evenArray, oddArray };
}
  
let { evenArray, oddArray } = splitArray(randomArray);
console.log("Array genap dengan jumlah index 50:", evenArray);
console.log("Array ganjil dengan jumlah index 50:", oddArray);
  
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
}
  
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
}
  
function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
}
  
function calculateAverage(arr) {
    let total = calculateTotal(arr);
    return total / arr.length;
}
  
console.log("Min array genap:", findMin(evenArray));
console.log("Max array genap:", findMax(evenArray));
console.log("Total array genap:", calculateTotal(evenArray));
console.log("Rata-rata array genap:", calculateAverage(evenArray));

console.log("Min array ganjil:", findMin(oddArray));
console.log("Max array ganjil:", findMax(oddArray));
console.log("Total array ganjil:", calculateTotal(oddArray));
console.log("Rata-rata array ganjil:", calculateAverage(oddArray));

function compareArrays(arr1, arr2) {
    let minComparison = findMin(arr1) > findMin(arr2) ? "Min lebih besar array ganjil" : "Min lebih besar array genap";
    let maxComparison = findMax(arr1) > findMax(arr2) ? "Max lebih besar array ganjil" : "Max lebih besar array genap";
    let totalComparison = calculateTotal(arr1) === calculateTotal(arr2) ? "Total memiliki nilai sama antara array genap dan ganjil" : "Total berbeda antara array genap dan ganjil";
    let averageComparison = calculateAverage(arr1) > calculateAverage(arr2) ? "Rata rata lebih besar array ganjil" : "Rata rata lebih besar array genap";
    
    return { minComparison, maxComparison, totalComparison, averageComparison };
}
  
let comparisonResult = compareArrays(evenArray, oddArray);
console.log("Perbandingan nilai:");
console.log(comparisonResult.minComparison);
console.log(comparisonResult.maxComparison);
console.log(comparisonResult.totalComparison);
console.log(comparisonResult.averageComparison);
  
  