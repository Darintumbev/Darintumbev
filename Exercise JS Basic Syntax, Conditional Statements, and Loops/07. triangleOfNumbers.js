function triangleOfNumbers(number) {

    for (let colone = 1; colone <= number; colone++) {
        let printLine = '';
        for (let row = 1; row <= colone; row++) {
            printLine += ` ${colone}`
        }
        console.log(printLine);

    }

}
triangleOfNumbers(10)