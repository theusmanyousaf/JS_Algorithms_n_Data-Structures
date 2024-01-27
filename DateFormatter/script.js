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
