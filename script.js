const drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    const item = document.getElementById(data);
    item.style.background = 'green';
    item.style.color = 'white';
    ev.target.appendChild(document.getElementById(data));
}

const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
}

const allowDrop = (ev) => {
    ev.preventDefault();
}