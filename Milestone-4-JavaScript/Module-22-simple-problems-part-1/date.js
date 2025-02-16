// const today = new Date();

// console.log(today);

const dt = new Date(0);
console.log(dt);

// specific date 
//  year , month index (start from 0), day , hour , min , second , ms;

const specificYear = new Date(2018,4,13,4,9,12,3);

console.log(specificYear);

// we can use getter setter method for any object of date constructor 

let year = specificYear.getFullYear();
console.log("The year is: ",year);

specificYear.setFullYear(2025);

year = specificYear.getFullYear();


console.log(year);


let dateNow= Date.now();

console.log(dateNow);


