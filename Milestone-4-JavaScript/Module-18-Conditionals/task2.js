let weight = 57;
let height = 1.52 ;

let BMI = weight / height**2 ;
BMI = parseFloat(BMI.toFixed(1));

console.log("Your BMI is: ", BMI);

if (BMI<18.5){
    console.log("You are underweight");
}

else if (BMI>= 18.5 && BMI <= 24.9){
    console.log("You are normal");
}
else if (BMI>=25 && BMI<=29.9){
    console.log("You are Overweight");
}

else{
    console.log("You are obese");
}