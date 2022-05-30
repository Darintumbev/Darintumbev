function rounding(number, long) {

    if (long > 15) {
        long = 15
    }

    let roundedNumber = number.toFixed(long)

    console.log(parseFloat(roundedNumber));


}

rounding(10.515005824822155566666, 3)