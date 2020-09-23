const clockString = document.createElement("div");
clockString.style.color = '#ff6666';
clockString.style.textAlign = 'center';
clockString.style.fontSize = '60px';
clockString.style.paddingTop = '20px';
clockString.style.fontFamily = 'Agency FB';

document.body.appendChild(clockString);
setInterval(() => {
    const date = new Date();
    let time = date.toLocaleTimeString().substring(3,);
    time = time[1] === ':' ? '0' + time : time;
    clockString.innerText = time;
}, 1000);
