const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const animationData = [
    {
        inputVal: 5,
        marginTop: 300,
        addElDelay: 1000
    },
    {
        inputVal: 2,
        marginTop: -200,
        addElDelay: 1500
    },
    {
        inputVal: 1,
        marginTop: -200,
        addElDelay: 2000
    }
];

const decimalToBinary = (input) => {
    if (input === 0 || input === 1) {
        return String(input); // returns input value as a string
    } else {
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
};

const showAnimation = () => {
    result.innerText = "Call Stack Animation";

    animationData.forEach((obj) => {
        setTimeout(() => {
            animationContainer.innerHTML += `
          <p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;" class="animation-frame">
            decimalToBinary(${obj.inputVal})
          </p>
        `;
        }, obj.addElDelay);

        setTimeout(() => {
            document.getElementById(obj.inputVal).textContent = obj.msg;
        }, obj.showMsgDelay);

        setTimeout(() => {
            document.getElementById(obj.inputVal).remove();
        }, obj.removeElDelay);
    });

    setTimeout(() => {
        result.textContent = decimalToBinary(5);
    }, 20000);
};

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);

    if (!numberInput.value || isNaN(inputInt)) {
        alert("Please provide a decimal number");
        return;
    }

    if (inputInt === 5) {
        showAnimation();
        return;
    }

    result.textContent = decimalToBinary(inputInt);
    numberInput.value = ""; // to clear input after each value check
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput()
    }
});