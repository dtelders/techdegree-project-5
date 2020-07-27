// lightbox2
lightbox.option({
    showImageNumberLabel: false
});

//hideseek
// $(document).ready(function() {
//     $("#search").hideseek({
//         attribute: "data-title"
//     });
// });

//target the searchbox
const searchTerm = document.querySelector("#search");
// //capture input text
// searchTerm.addEventListener("keyup", () => {
//     console.log(searchTerm.value.toLowerCase());
// });
// // //target entire caption
// const caption = document.querySelectorAll("a")[0].getAttribute("data-title");
// for (let i = 0; i < caption[i]; i++) {
//     console.log(caption[i].toLowerCase());
// }

//https:www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/

// const search = document.querySelector('#site-search');
// const thumbnail = document.querySelectorAll('.thumbnail a');

// const handleSearch = event => {
//     const searchTerm = event.target.value.toLowerCase();

//     thumbnail.forEach(imageSearch => {
//         const text = imageSearch.getAttribute('data-title').toLowerCase();
//         const box = imageSearch.parentElement;

//         if (text.indexOf(searchTerm) > -1) {
//             box.style.display = "block";
//         } else {
//             box.style.display = "none";
//         }
//     });
// }
// search.addEventListener('keyup', handleSearch);

const caption = document.querySelectorAll("a")[0].getAttribute("data-title");

const photoSearch = event => {
    const searchTerm = event.target.value.toLowercase();
    photoSearch.forEach(boxText => {
        const text = boxText.textContent.toLowercase();
    });
};

searchTerm.addEventListener("keyup", photoSearch);
