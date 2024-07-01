var buttons = ['button_1', 'button_2', 'button_3'];
const randomSelect = buttons[Math.floor(Math.random() * buttons.length)];

function checkWinner(id) {
    if (id === randomSelect) {
        document.getElementById(id).innerHTML = "You are a Winner!";
        document.getElementById(id).style.backgroundColor = "green";
    } else {
        document.getElementById(id).innerHTML = "Try another button!";
        document.getElementById(id).style.backgroundColor = "red";
    }
}