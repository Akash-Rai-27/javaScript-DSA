// swapping 
const arr = [1,2,3,4,5,6,7];

function swapElementd(arr,index1,index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

swapElementd(arr,0,1);
console.log(arr)


// maxElement

const maxElement = (arr)=>{
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>max){
            max = arr[i]
        }
        
    }
    return max;
}

maxElement(arr)
console.log(maxElement(arr));

