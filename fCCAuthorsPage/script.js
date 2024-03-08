const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];


fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
    .then((res) => res.json()) // obtian res data in javascript object notation
    .then((data) => { // data from json in the form of an array of objects
        console.log(data);
    })
    .catch((err) => { // to address potential errors
        console.error(`There was an error: ${err}`);
    });