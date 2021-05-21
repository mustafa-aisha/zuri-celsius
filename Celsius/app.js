
let n;

function convertFahrToCelsius(n) {

    if (typeof(n) === "number") {
       return ((n-32) * 5 / 9).toFixed(4);

   } else {
    console.log(`${n} is not a valid number but a/an ${typeof(n)}`)
} 
} 



function checkYuGiOh(n) {
        if (n % 2 === 0){
            console.log('yu')
        }  else if (n % 3 === 0) {
            console.log('gi');
        } else if (n % 5 === 0) {
            console.log('oh')
        } else if (n === 2 * 5){
            console.log('yu-gi')
        }
        else {
            console.log('invalid parameter:' + `${n}`)
        }
    }
    

