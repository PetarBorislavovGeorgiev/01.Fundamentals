function leapYear(number) {
    if(number % 4 === 0 && number % 100 !== 0 || number % 400 === 0){
        console.log('yes');
    }else {
        console.log('no');
    }
}
leapYear(1999);
leapYear(2000);
leapYear(1900);
