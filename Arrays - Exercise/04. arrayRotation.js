function arrayRotation(arrey, rotations){

    while (rotations > 0) {
        let elementToMove = arrey.shift();
        arrey.push(elementToMove)
        rotations--;
    }
    console.log(arrey.join(" "));

}
arrayRotation([51, 47, 32, 61, 21], 2)