const completedButton = document.getElementsByClassName('complete');
const taskCompleted = document.getElementById('task-completed');
const taskRemaining = document.getElementById('task-remaining')
const activityLog = document.getElementById('finished-task');
const clearHistoryBtn = document.getElementById('clear-history-btn');

let completedCount = getInputById('task-completed');
let remainingCount = getInputById('task-remaining');

function getCurrentTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let amPm;
    if (amPm >= 12) {
        amPm = 'PM';
    } else {
        amPm = 'AM'
    }

    if (hours % 12 === 0) {
        hours = 12;
    } else {
        hours = hours % 12;
    }

    if (minutes < 10) {
        minutes = '0' + minutes
    } else {
        minutes;
    }

    return ` ${hours}:${minutes} ${amPm} `;
}

for (let button of completedButton) {
    button.addEventListener('click', function () {
        button.disabled = true;
        if (remainingCount > 0) {
            remainingCount = remainingCount - 1;
        }
        completedCount = completedCount + 1;

        taskCompleted.textContent = completedCount;
        taskRemaining.textContent = remainingCount;

        let taskTitle = button.parentElement.parentElement.querySelector("h1").textContent;

        const activitylogEntry = document.createElement("p");
        activitylogEntry.textContent = `You have completed the task "${taskTitle}" at ${getCurrentTime()}.`;

        activitylogEntry.style.backgroundColor = '#f4f7ff';
        activitylogEntry.style.padding = '1rem';
        activitylogEntry.style.marginBottom = '0.5rem';

        activityLog.appendChild(activitylogEntry);
    })
}

clearHistoryBtn.addEventListener('click', function () {
    activityLog.innerText = '';
})