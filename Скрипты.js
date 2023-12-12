function relocate(url) {
    window.location.replace('http:' + url);
}

function filterPath() {
    const curFilter = document.querySelector(".active");
    const curCat = curFilter.dataset.filter;
    
    const paths = document.querySelectorAll(".path-card");
    console.log(curCat);
    paths.forEach(item => {
        
        item.style.display  = "none";
        console.log(item.dataset.cat);
        if(item.dataset.cat === curCat || curCat === "all") {
            item.style.display  = "";
        }
    });
    
}

const filters = document.querySelectorAll(".path-filter");
filters.forEach( filter => {
    filter.addEventListener("click", () => {
        filters.forEach(item => {item.classList.remove("active")});
        
        filter.classList.add("active");
        filterPath();
    });
});


  