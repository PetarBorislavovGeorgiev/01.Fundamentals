function sumAndVAT(input) {
    let sum = 0;

    for (let index = 0; index < input.length; index++) {
        
        sum += input[index];
    }
    console.log('sum = ' + sum);
    console.log('VAT = ' + sum * 0.2);
    console.log('total = ' + sum * 1.2);
}
sumAndVAT([1.20, 2.60, 3.50]);
