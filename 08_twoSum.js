// this is not better solution

const twoSum = (arr,tar)=>{
    result=[]
    for(let i = 0; i < arr.length; i++){
        for (let j=i+1; j < arr.length;j++){
            if(i!==j){
                if(arr[i]+arr[j]===tar){
                    result.push([i,j]);
                }
            }
        }
    }
    return result.length===1? result[0]:result;
}

console.log(twoSum([2,7,11,3,4,6],9))