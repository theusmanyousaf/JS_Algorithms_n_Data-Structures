const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault(); // to prevent default submission of form
    // Since we have an array, we can use the map method to convert each value to a number.
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));
    updateUI(inputValues)
}


const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    })
}

sortButton.addEventListener("click", sortInputArray);