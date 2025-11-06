function stringChop(str, size) {
  // your code here
if (str === null) return [];
    
    const result = [];
    
    // Handle edge case where size is 0 or negative
    if (size <= 0) return [str];
    
    // Split the string into chunks
    for (let i = 0; i < str.length; i += size) {
        result.push(str.slice(i, i + size));
    }
    
    return result;
   
    
	}
    
    
    


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

