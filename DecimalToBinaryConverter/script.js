const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
    const inputs = [];
    const quotients = [];
    const remainders = [];

    if (input === 0) {
        result.innerText = "0";
        return; // to break out of function early
    }

    while (input > 0) {
        const quotient = Math.floor(input / 2);
        const remainder = input % 2;

        inputs.push(input);
        quotients.push(quotient);
        remainders.push(remainder);
        input = quotient;
    }

    result.innerText = remainders.reverse().join("");
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