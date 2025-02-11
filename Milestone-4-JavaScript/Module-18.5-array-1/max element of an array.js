let array = [1,3,15,12,227,4,77,0,7,9,83]

let maxElement = 0;

// console.log(array.length);

for(let i=0 ; i<= array.length-1 ; i++){

    if(array[i]> maxElement){
        maxElement= array[i];
    }    

}

console.log("Max Elemnet of you array is: " , maxElement);