
function sum (array){

    let result=0;

    for(let num of array){

        result= result+ num ;
    }

    console.log("Sum of this array is: ", result);
}

const array = [1,2,3,4];
const array2 = [5,5,5,5,5,5];

sum(array);
sum(array2);