function amazingNumbers(num){
    let numToString = String(num);
    let result = 0;

    for (let i = 0; i < numToString.length; i++) {
        let num = Number(numToString[i]);
        result += num;
    }
    let resultToString = String(result);
    let isAmazing = false
    for (let i = 0; i < resultToString.length; i++) {
        if (Number(resultToString[i] === 9)){
            isAmazing = true;
            break;
        }
        
    }
    let amazing = isAmazing ? "True" : "False";
    console.log(`${num} Amazing? ${amazing}`);
}
amazingNumbers(123)
amazingNumbers(1233)
amazingNumbers(1233)
amazingNumbers(123583)
amazingNumbers(1158233)
amazingNumbers(1518518233)