function vacation(number, key, day) {

    let totalPrice = 0;

    if (key === "Students") {


        switch (day) {
            case 'Friday': totalPrice = number * 8.45; break;
            case 'Saturday': totalPrice = number * 9.8; break;
            case 'Sunday': totalPrice = number * 10.46; break;
        }
        if (number >= 30) {
            totalPrice *= 0.85;
        }

    } else if (key === 'Business') {
        if (number >= 100) {
            number -= 10;
        }

        switch (day) {
            case 'Friday': totalPrice = number * 10.90; break;
            case 'Saturday': totalPrice = number * 15.60; break;
            case 'Sunday': totalPrice = number * 16; break;
        }
    } else if (key === 'Regular') {

        switch (day) {
            case 'Friday': totalPrice = number * 15; break;
            case 'Saturday': totalPrice = number * 20; break;
            case 'Sunday': totalPrice = number * 22.50; break;
        }
        if (number >= 10 && number <= 20) {
            totalPrice *= 0.95;
        }

    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(30,
    "Students",
    "Sunday")