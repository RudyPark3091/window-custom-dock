const bs = document.createElement("div");
bs.id = 'button-sample';

bs.onclick = (e) => {
    window.moveBy(0, 80);
}

document.body.appendChild(bs);