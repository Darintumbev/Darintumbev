function sumDigits(num) {
    let curentNum = 0;
    let sum = 0;
    let numString = num.toString();

    for (let i = 0; i < numString.length; i++) {
        curentNum = numString[i];
        sum += Number(curentNum);
     }
      console.log(sum);

}
sumDigits(245678)