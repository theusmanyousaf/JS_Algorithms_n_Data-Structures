// this method iterates over the array and return one condenced value of the array in this case return sum of all values of the array
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length; // this initialize the accumulator with 0 value 

const calculate = () => {
    const value = document.querySelector("#numbers").value; // selects input element with id 'numbers' and returns its value entered by user
    const array = value.split(/,\s*/g); // splits values entered in the form of an array separated by commas regrdless of spaces between them
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));  // converts input string values into numbers // filters out values which are not numbers

    const mean = getMean(numbers);

    document.querySelector("#mean").textContent = mean; // displays mean value
}