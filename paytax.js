function  Tax (n){
    // declaration of tax amount
let y; 
if (n < 12000){
    console.log('you dont have to pay tax');
    y = 0;
}
else if(n>12000 && n<36000){
    y = 0.2*n;
    console.log('can pay 20% tax')

}
else if (n>36000){
    y = 0.4*n;
    console.log('can pay 40% tax')
}
return y
}


export default Tax;