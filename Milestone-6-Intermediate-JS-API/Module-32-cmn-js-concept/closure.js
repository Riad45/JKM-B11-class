 function outerFunction() {
    let count=0;

    return function innerFunction(){
        count++;
        console.log(count);
    }
} 

const x = outerFunction();

x();
x();

console.log(innerFunction());