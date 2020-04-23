// // How do you print duplicate characters from a string?

// class Duplicates {
//     constructor(string){
//         this.string = string;
//         this.duplicateArray = [];
//     }

//     findDuplicates = () => {
//         const stringToArray = this.string.split('').sort();
//         for(let i = 0; i < (stringToArray.length - 1); i++){
//             if(stringToArray[i] === stringToArray[i+1]){
//                 this.duplicateArray.push(stringToArray[i])
//             }
//         }
//         return this.duplicateArray;
//     }
// }

// const firstString = new Duplicates('stuff');
// console.log(firstString.findDuplicates());

// const secondString = new Duplicates('hello');
// console.log(secondString.findDuplicates());

