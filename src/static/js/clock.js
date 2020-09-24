const clockString = document.createElement("div");
clockString.id = "clock";

setInterval(() => {
    const date = new Date();
    let time = date.toLocaleTimeString().substring(3,);
    time = time[1] === ':' ? '0' + time : time;
    clockString.innerText = time;
}, 1000);

clockString.addEventListener('mouseenter', (e) => {
    clockString.classList.toggle('over');
});
clockString.addEventListener('mouseleave', (e) => {
    clockString.classList.toggle('over');
});

document.body.appendChild(clockString);
