function checkSorted(arr) { 
    for (let i = 0; i < arr.length - 1; i++) { 
        if (   Number.isInteger( arr[i+1]/arr[i]  ) ==false   ) { 
            return false; 
        } 
    } 
    return true; 
} 
  
// Example usage 
const arr1 = [2, 4, 8, 16, 32,64]; 
const arr2 = [22, 65, 1, 39]; 
  
console.log(checkSorted(arr1));    
console.log(checkSorted(arr2));