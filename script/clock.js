function updateTime() {
    let now = new Date();
    let options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    let date = now.toLocaleDateString('en-US', options).replace(',', '');
    document.getElementById("clock").textContent = date ;
}
updateTime();