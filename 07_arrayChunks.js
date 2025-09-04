const chunk = (arr,n) => {
    let chunked = [];
    let tempIndex=0;
 for(let i=0; i< arr.length ; i+=n){
    chunked.push(arr.slice(i,tempIndex+n));
    tempIndex = tempIndex + n;
    
    
 }
 return chunked;
}

console.log(chunk([2,3,5,6,7,6],5))

const chunkOne = (arr,size) =>{
    const chunked = [];

    let index = 0;

    while(index < arr.length){
        const chunk = arr.slice(index,index + size);
        chunked.push(chunk);
        index += size;
    }

    return chunked;
}

console.log(chunkOne([6,3,7,2,8,3,8,5,2],3))