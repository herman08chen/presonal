const clickButton = document.getElementById("click-button");
const body = document.body;
const c = document.getElementById("tswcontainer");

function buttonPress() {
    c.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255).toString(10) + " " + Math.floor(Math.random() * 255).toString(10) + " " + Math.floor(Math.random() * 255).toString(10) + ")";
    //console.log(`color: ${c.style.backgroundColor}`);
}
