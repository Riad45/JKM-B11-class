const numbers = [1,2,3,4,5];
const revarseNumbers =[];

let revarseNumbers2 = [];

const revUsingUnshift=[];



console.log(numbers);

// ############# using push #######################

// ################################################

for(let i= (numbers.length)-1; i>=0;i--){
    console.log(numbers[i]);

    revarseNumbers.push(numbers[i]);
    
}

console.log("Using push", revarseNumbers);


// ############ Using unshift ##################

// #############################################

for(let num of numbers){
    revUsingUnshift.unshift(num);
}

console.log("Using unshift: ",revUsingUnshift);


// ############################################
// ############################################


console.log("Using .reverse");

revarseNumbers2 = numbers.reverse();

console.log(numbers);
console.log(revarseNumbers2);




// extraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

