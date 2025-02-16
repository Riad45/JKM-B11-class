

function discountedPrice (quntity){
    let price=0;
    

    if(quntity<=10){
        price= quntity*100;
    }

    else if( quntity<=20){
         const over10 = quntity-10;

        price= (10*100) + (over10*90);
    }

    else{

       const over20= quntity-20;

        price= (10*100)+(10*90)+(over20*70);

    }

    return price;
}

console.log("total cost after discounted:",discountedPrice(25));