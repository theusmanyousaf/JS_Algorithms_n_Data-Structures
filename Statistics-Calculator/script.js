// this method iterates over the array and return one condenced value of the array in this case return sum of all values of the array
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length; // this initialize the accumulator with 0 value 

const getMedian = (array) => { // we can reduce this function to fewer lines as well but this will make code more complex for future maintainability
    const sorted = array.sort((a, b) => a - b);
    const median =
        array.length % 2 === 0
            ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
            : sorted[Math.floor(array.length / 2)];
    return median;
}

const calculate = () => {
    const value = document.querySelector("#numbers").value; // selects input element with id 'numbers' and returns its value entered by user
    const array = value.split(/,\s*/g); // splits values entered in the form of an array separated by commas regrdless of spaces between them
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));  // converts input string values into numbers // filters out values which are not numbers

    const mean = getMean(numbers);
    const median = getMedian(numbers)

    document.querySelector("#mean").textContent = mean; // displays mean value
    document.querySelector("#median").textContent = median;
}