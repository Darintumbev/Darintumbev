function destinationMapper(str){

    let points = 0;
    let destinacion =[];

    const regex = /[=\/][A-Z][A-Za-z]{2,}[=\/]/g;

    let found = str.match(regex)

   if(found){
    found.forEach((el, i) => {
        if( el[0] === el[el.length - 1]){
            el = el.substring(1, el.length - 1);
            points += el.length;
            destinacion.push(el);
        }
    })
   }

    console.log(`Destinations: ${destinacion.join(', ')}`);
    console.log(`Travel Points: ${points}`);

}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")