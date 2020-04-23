// How do you find the duplicate number on a given integer array?


const findDuplicate = (array1) => {
    let object = {};
    let result = [];
  
    array1.forEach((item) => {
      if(!object[item]){
        object[item] = 0;
        object[item] +=1; 
      }
    })
  
    for (let prop in object) {
      if(object[prop] >= 2){
        result.push(prop);
      }
    }
    
    return result;
  }
  
    
  console.log(findDuplicate([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));