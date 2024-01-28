const getNumberWithComma = (number) => {
    if (number.toString().length < 4) return number;
    for (let i = number.toString().length - 3; i>0; i -= 3) {
        number = number.toString().slice(0,i) + "," + number.toString().slice(i);
    }
    console.log(number); 
}

getNumberWithComma(123456789);