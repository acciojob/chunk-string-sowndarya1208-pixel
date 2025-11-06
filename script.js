function stringChop(str, size) {
  // your code here

   
    if (typeof size !== 'number' || size <= 0) return [str];
    if (!str) return [''];
    
    return Array.from(
        { length: Math.ceil(str.length / size) },
        (_, index) => str.substring(index * size, (index + 1) * size)
    );
	}
    
    
    


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
console. log(chunkString("12345", 2));

