
function inchToFeet(inch){
    const fractionFeet = inch/12;
    const intFeet = parseInt(fractionFeet);
    // const intInch = (fractionFeet-intFeet)*12;
    const intInch = inch%12;

    console.log(intFeet,"Ft ",intInch,"inch");
}

inchToFeet(75);