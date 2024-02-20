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

const getMode = (array) => {
    const counts = {};
    array.forEach((el) => {
        counts[el] = (counts[el] || 0) + 1  // here we are accessing 'el' property of counts obj with fallback value of 0 and incrementing it with every iteration it repeats in an array
    })
    if (new Set(Object.values(counts)).size === 1) { // we are making a set with values of 'counts' object if the size property of set is 1 that means every value appears the same number of times i.e. no Mode.
        return null;
    }
    const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];  // returns highest value from the counts object after sorting form highest to lowest order
    const mode = Object.keys(counts).filter(
        (el) => counts[el] === counts[highest]
    );
    return mode.join(", ");
}

const getRange = array => Math.max(...array) - Math.min(...array);

const getVariance = (array) => {
    const mean = getMean(array);
    const variance = array.reduce((acc, el) => {
        const difference = el - mean;
        const squared = difference ** 2;
        return acc + squared;
    }, 0) / array.length;
    return variance;
}

const calculate = () => {
    const value = document.querySelector("#numbers").value; // selects input element with id 'numbers' and returns its value entered by user
    const array = value.split(/,\s*/g); // splits values entered in the form of an array separated by commas regrdless of spaces between them
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));  // converts input string values into numbers // filters out values which are not numbers

    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers);

    document.querySelector("#mean").textContent = mean; // displays mean value
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;
    document.querySelector("#variance").textContent = variance;
}