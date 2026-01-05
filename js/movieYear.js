function getYear() { 
    year = document.getElementById('movieYear').value;
    // window.location.href = '/movies/' + year + '/index.html';
    window.location.href = '/_site/movies/' + year + '/index.html';
}

docReady(function() {

    const grid = document.querySelector('.grid');
    const gridItems = grid.querySelectorAll(':scope > div');
    // Use regex to extract year from URL path - works regardless of domain/port
    const yearMatch = window.location.pathname.match(/movies\/(\d{4})/);
    const year = yearMatch ? yearMatch[1] : '2022';
    document.getElementById('movieYear').value = year;

    gridItems.forEach((item, i) => {
        item.style.backgroundImage = `url(/images/movies/${year}/${i+1}.jpg)`;
      })
}); 

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}  