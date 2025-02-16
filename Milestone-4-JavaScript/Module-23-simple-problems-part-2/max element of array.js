
const array = [3,6,1,2,87,56,98,2,3]
function maxElement(array){
    let max = 0;

    for(let num of array){

        if(num>max){
            max = num;
        }
    }

    console.log("Max element is : ", max);


}

maxElement(array);