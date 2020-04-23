// How do you remove duplicate numbers from an array?

// export function removeDuplicates(numberArray: number[]) {
//     return [... new Set(numberArray)];
//   }


  // or 
  const array = [1,2,3,1,2,1];

const sorted = [...new Set(array)];
console.log(sorted)