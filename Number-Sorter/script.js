const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault(); // to prevent default submission of form
    // Since we have an array, we can use the map method to convert each value to a number.
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));

    const sortedValues = bubbleSort(inputValues);

    updateUI(inputValues)
}

const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    })
}

const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

sortButton.addEventListener("click", sortInputArray);