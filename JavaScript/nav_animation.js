// Animated Classes
let navBars = document.querySelectorAll(".nav-bar");
let navLists = document.querySelectorAll(".nav-list");
let navItems = document.querySelectorAll(".nav-item");
let navPages = document.querySelectorAll(".nav-page");
let mainContents = document.querySelectorAll(".main-content");

let matrix = [navBars, navLists, navItems, navPages, mainContents];

// Animation
let animation = "0.25s ease-out";

// looping through all elements
for(let i = 0 ; i < matrix.length ; i++)
    for(let j = 0 ; j < matrix[i].length ; j++)
        matrix[i][j].style.transition = animation;
        
