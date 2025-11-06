function stringChop(str, size) {
  // your code here

    if (size <= 0 || str.length <= size) {
        return [str];
    }
    
    const chunks = [];
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.substring(i, i + size));
    }
    return chunks;
	}


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
console. log(chunkString("12345", 2));

