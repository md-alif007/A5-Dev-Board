// function for getting element

function getInputById(id) {
    const value = document.getElementById(id).textContent;
    return parseInt(value);
}

// update time 

function updateTime() {
    let now = new Date();
    let options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    let date = now.toLocaleDateString('en-US', options).replace(',', '');
    document.getElementById("clock").textContent = date;
}
updateTime();

// Theme change

const colors = ["#27667B", "#CB9DF0", "#F3D0D7", "#DDEB9D"];
let index = 0;

document.getElementById("theme-change-btn").addEventListener("click", function () {
    document.body.style.backgroundColor = colors[index];

    index++;

    if (index >= colors.length) {
        index = 0;
    }
});

// toggle

const sendToBlogs = document.getElementById("discover");

sendToBlogs.addEventListener('click', function () {
    window.location.href = 'blogs.html'
})

const backToDesk = document.getElementById('back-to-desk');

backToDesk.addEventListener('click', function () {
    window.location.href = 'index.html'
})

