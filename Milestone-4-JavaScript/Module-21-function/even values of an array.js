
function evenValue(array){

    console.log("All the even numbers of this array is given below:");

    for(let num of array){

        num%2 === 0 ? console.log(num," "): 0 ;

    }
}

evenValue([1,2,3,4,5,6,7,8,9,10]);