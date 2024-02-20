const getMean = (array) => {
    // this method iterates over the array and return one condenced value of the array in this case return sum of all values of the array
    const sum = array.reduce((acc, el) => acc + el, 0); // this initialize the accumulator with 0 value
    const mean = sum / array.length;
    return mean;
}

const calculate = () => {
    const value = document.querySelector("#numbers").value; // selects input element with id 'numbers' and returns its value entered by user
    const array = value.split(/,\s*/g); // splits values entered in the form of an array separated by commas regrdless of spaces between them
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));  // converts input string values into numbers // filters out values which are not numbers
}