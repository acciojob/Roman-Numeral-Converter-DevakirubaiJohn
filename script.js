function convertToRoman(num) {
    const obj = {
        0:['M',1000], 
        1:['D', 500], 
        2:['C', 100], 
        3:['L', 50], 
        4:['X', 10], 
        5:['V', 5], 
        6:['I', 1]
    };

    let result = "";

    // iterate over the object in reverse order
    for(let i = 6; i >= 0; i--) {
        // calculate how many times the current value can be subtracted from num
        let times = Math.floor(num / obj[i][1]);

        // append the corresponding numeral to result as many times as the value was subtracted
        result += obj[i][0].repeat(times);

        // update num by getting the remainder of the division
        num %= obj[i][1];
    }

    // return the result
    return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
