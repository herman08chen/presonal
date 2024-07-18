const widgetContainer = document.getElementById("widget-container");
const arrayOfNames = ["Misha", "Pancho", "Mango"];

function buy(store) {
    let bank = parseInt(score.innerHTML);
    let cost = parseInt(store.getAttribute("cost"));
    let reap = parseInt(store.getAttribute( "reap"));
    console.log(`bank: [${bank}] cost: [${cost}]`);
    


    if(bank < cost){
        alert("Insufficient funds");
        return;
    }

    changeScore(-1 * cost);

    //store.getAttribute["cost"] = Math.ceil(parseFloat(store.getAttribute["cost"]) * 1.1).toString();

    var audio = new Audio('cat-meow-6226.mp3');
    audio.play();

    var Misha = document.getElementById(store.getAttribute("name"));
    if (Misha !== null) {
        Misha.setAttribute("reap", (parseInt(Misha.getAttribute("reap")) + reap));
        return;
    }

    var widget = document.createElement("div");
    widget.id = store.getAttribute("name");
    widget.classList.add("widget");
    fillWidget(store, widget);
    widget.onclick = () => {
        harvest(widget);
    }
    widgetContainer.appendChild(widget);
    if (widget.getAttribute("auto") == 'true') harvest(widget);

}

function harvest(widget) {
    // Only run if currently not harvesting

    // Set harvesting flag
    widget.setAttribute("harvesting", "");

    // If manual, collect points now
    if (widget.getAttribute("auto") != 'true') {
        changeScore(widget.getAttribute("reap"));
        showPoint(widget);
    }

    setTimeout(() => {
        // Remove the harvesting flag
widget.removeAttribute("harvesting");
        // If automatic, collect points
        if (widget.getAttribute("auto") == 'true') {
            changeScore(widget.getAttribute("reap"));
            showPoint(widget);
            harvest(widget);


        }
    }, parseFloat(widget.getAttribute("cooldown"))*1000);
}

function changeScore(amount) {
    score.innerHTML = parseInt(score.innerHTML) + parseInt(amount) ;

    // Update the stores to block buying expensive boxes
    for(let store of stores){
        let bank = parseInt(score.innerHTML);
        let cost = parseInt(store.getAttribute("cost"));

        if(bank < cost){
            store.setAttribute("broke", "");
        }
        else{
            store.removeAttribute("broke");
        }
    }
}

function showPoint(widget) {
    let number = document.createElement("span");
    number.className = "point";
    number.innerHTML = "+" + widget.getAttribute("reap");
    number.style.left = "50%";
    number.style.top = "50%";
    number.onanimationend = () => {
        widget.removeChild(number);
    }
    widget.appendChild(number);
}