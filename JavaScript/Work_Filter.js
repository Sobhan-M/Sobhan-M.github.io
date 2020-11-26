let work = document.querySelectorAll(".work");
let order = document.querySelectorAll(".radio");
let checkboxes = document.querySelectorAll(".check");
let workArea = document.getElementById("work_experience");

// Checks which order to sort in
function myFilter(){
    if(order[0].checked == true)
        sortByNew();
    else
        sortByOld();
}

// Sorts from oldest (bottom) to newest (top)
function sortByNew(){
    let filters = findFilters();
    let current = document.querySelectorAll(".work");
    let count = 0;

    // Removes all parts
    for(let i = 0 ; i < current.length ; i++){
        workArea.removeChild(current[i]);
    }

    // inserts them based on filter
    for(let i = 0 ; i < work.length ; i++){
        for(let j = 0 ; j < filters.length ; j++){
            if (work[i].classList.contains(filters[j])){

                // Ensures correct order of banners
                if(count % 2 == 0){
                    work[i].classList.add("banner");
                    if (work[i].classList.contains("not_banner"))
                        work[i].classList.remove("not_banner");
                }
                else{
                    work[i].classList.add("not_banner");
                    if (work[i].classList.contains("banner"))
                        work[i].classList.remove("banner");
                }
                count++
                workArea.appendChild(work[i]);
                break;
            }
        }
    }
}


// Sort from newest (bottom) to oldest (top)
function sortByOld(){
    let filters = findFilters();
    let current = document.querySelectorAll(".work");
    let count = 0;

    // Removes all parts
    for(let i = 0 ; i < current.length ; i++){
        workArea.removeChild(current[i]);
    }

    // inserts them based on filter
    for(let i = work.length -1 ; i >= 0 ; i--){
        for(let j = 0 ; j < filters.length ; j++){
            if (work[i].classList.contains(filters[j])){
                // Ensures correct order of banners
                if(count % 2 == 0){
                    work[i].classList.add("banner");
                    if (work[i].classList.contains("not_banner"))
                        work[i].classList.remove("not_banner");
                }
                else{
                    work[i].classList.add("not_banner");
                    if (work[i].classList.contains("banner"))
                        work[i].classList.remove("banner");
                }
                count++
                workArea.appendChild(work[i]);
                break;
            }
        }
    }
}

// Finds all current filters
function findFilters(){
    let filter = new Array;
    for(let i = 0 ; i < checkboxes.length ; i++){
        if(checkboxes[i].checked == true)
            filter.push(checkboxes[i].value);          
    }
    return filter;
}