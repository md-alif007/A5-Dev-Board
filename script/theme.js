const colors = ["#27667B", "#CB9DF0", "#F3D0D7", "#DDEB9D"];
let index = 0;

document.getElementById("theme-change-btn").addEventListener("click", function () {
    document.body.style.backgroundColor = colors[index];

    index++;

    if (index >= colors.length) {
        index = 0;
    }
});
