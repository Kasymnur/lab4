function filterDivisibleBy3(numbers) {
    return numbers.filter((n) => n % 3 === 0);
  }
  
  // Example usage:
  const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const outputList = filterDivisibleBy3(inputList);
  console.log(outputList); // Output: [3, 6, 9]
  
