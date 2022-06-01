function getYear() { 
    year = document.getElementById('movieYear').value;
    // window.location.href = '/movies/' + year + '/index.html';
    window.location.href = '/_site/movies/' + year + '/index.html';
}

docReady(function() {

    const grid = document.querySelector('.grid');
    const gridItems = grid.querySelectorAll(':scope > div');
    // const year = window.location.href.substring(29, 33);
    const year = window.location.href.substring(33, 37);
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