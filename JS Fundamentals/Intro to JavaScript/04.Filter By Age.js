function FilterByAge(minAge, FirstPersonName, FirstPersonAge, SecondPersonName, SecondPersonAge) {
    if (FirstPersonAge >= minAge){
        console.log(`{ name: '${FirstPersonName}', age: ${FirstPersonAge} }`);
    }
    if(SecondPersonAge >= minAge){
        console.log(`{ name: '${SecondPersonName}', age: ${SecondPersonAge}}`);
    }
}
FilterByAge(12, 'Ivan', 15, 'Asen', 9);
