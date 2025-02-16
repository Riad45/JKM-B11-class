const array = [3, 6, 1, 2, 87, 56, 98, 2, 3]
function arraySorting(array) {
    
    let sortArray = [];

    for (let i = 0; i < array.length; i++) {

        let max = 0;

        for (let num of array) {

            if (num > max) {
                max = num;
            }
        }

        console.log("Max element is : ", max);
        sortArray.push(max);
    }

    console.log(sortArray);


}

arraySorting(array);