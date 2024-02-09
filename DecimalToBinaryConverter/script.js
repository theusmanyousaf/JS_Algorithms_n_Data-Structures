const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
    let binary = "";

    if (input === 0) {
        binary = "0";
    }

    while (input > 0) {
        binary = (input % 2) + binary; // This is what will build the binary string from right to left.
        input = Math.floor(input / 2);
    }

    result.innerText = binary;
}

const checkUserInput = () => {
    if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
        alert("Please provide a decimal number");
        return;
    }

    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = ""; // to clear input after each value check
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput()
    }
});