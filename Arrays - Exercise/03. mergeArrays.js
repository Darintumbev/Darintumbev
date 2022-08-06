function mergeArrays(firstArrey , secondArrey) {

    let newArray = [];
    let arreyL = firstArrey.length;

    for (let i = 0; i < arreyL; i++) {
        
        if ( i % 2 === 0){
            newArray[i] = Number(firstArrey[i]) + Number(secondArrey[i]);
        } else{
            newArray[i] = firstArrey[i] + secondArrey[i];
        }
    }

    console.log(newArray.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
            ['17', '22', '87', '36', '11'])