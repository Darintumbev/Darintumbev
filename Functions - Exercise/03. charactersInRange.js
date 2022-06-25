function charactersInRange (firstChar, secundChar){
    firstNumber = 0;
    lastNumber = 0;
    finalResul = "";

    if ( firstChar.charCodeAt() < secundChar.charCodeAt()){
        firstNumber = firstChar.charCodeAt();
        lastNumber = secundChar.charCodeAt();
    }else{
        firstNumber = secundChar.charCodeAt();
        lastNumber = firstNumber.charCodeAt();
    }

    for (let index = firstNumber+1; index < lastNumber; index++) {
        finalResul += (String.fromCharCode(index) + " ")
    }
    console.log(finalResul);

}
charactersInRange("C","#")