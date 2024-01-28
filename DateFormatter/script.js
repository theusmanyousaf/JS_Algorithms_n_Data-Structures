const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();

/* 
the Date() constructor with the new operator to create a new Date object that returns
a string with the current date and time:

const currentDate = new Date();
console.log(currentDate);

Output:
Mon Aug 23 2021 15:31:00 GMT-0400 (Eastern Daylight Time)
*/

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => { // the change event is used to detect when the value of an HTML element has changed
    switch (dateOptionsSelectElement.value) {
        case "yyyy-mm-dd":
            currentDateParagraph.textContent = formattedDate
                .split("-")
                .reverse()
                .join("-");
            break;
        case "mm-dd-yyyy-h-mm":
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
            break;
        default:
            currentDateParagraph.textContent = formattedDate;
    }
});