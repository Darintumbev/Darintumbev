function login(input){
    let array = input[0];
    let password = '';
    let userPassword = input[1]
    let counter =0;


    for (let index = array.length; index > 0; index) {
        const element = array[--index];
        password += element;
    }
    console.log(password);

    
}

login(['Acer','login','go','let me in','recA'])