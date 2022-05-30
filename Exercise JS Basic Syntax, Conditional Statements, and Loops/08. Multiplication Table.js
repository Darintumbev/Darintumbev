function multiplicationTable(num){

    for (let index = 1; index <= 10; index++) {
        let result = num * index
        console.log(`${num} X ${index} = ${result}`);
        
    }

}
multiplicationTable(5)