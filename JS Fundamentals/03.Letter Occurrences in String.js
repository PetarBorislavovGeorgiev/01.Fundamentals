function letterOccurrencesInString(str, ch) {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
       if(str[index] == ch){
           count++;
       }
        
    }
    console.log(count);
}
letterOccurrencesInString('hello', 'l');
