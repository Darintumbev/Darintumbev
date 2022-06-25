function numbers(nums){
    let arreyOfStrings = nums.split(" ")
    let arreyOfNum = [];
    let sum = 0;
    for( let el of arreyOfStrings){
        let curentNumber = Number(el);
        arreyOfNum.push(curentNumber);
        sum += curentNumber
    }

    let ave = sum / arreyOfNum.length

    console.log(ave);
    let graterOfAverage = [];

    for(let el of graterOfAverage){
        if( el > ave){
            graterOfAverage.push(el);
        }
    }
    graterOfAverage = graterOfAverage.sort((a,b) => b -a);
    console.log(graterOfAverage.slice(-5));

}
numbers ('10 20 30 40 50')
numbers ('5 2 3 4 -10 30 40 50 20 50 60 60 51')