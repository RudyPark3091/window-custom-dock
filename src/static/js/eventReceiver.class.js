class EventReceiver {
  constructor() {
    document.body.innerHTML += '<div id="event-receiver"></div>'
    document.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
    ipcRenderer.on('iconReply', (event, args) => {
      this.appendFileIcon(args);
    });
    this.self = document.getElementById("event-receiver");
    this.self.addEventListener("mouseenter", this.handleMouseEnter);
    this.self.addEventListener("mouseleave", this.handleMouseLeave);
    this.self.addEventListener("drop", this.handleDrag);
  }
  
  handleMouseEnter(e) {
    const clock = document.getElementById("clock");
    const svg = document.querySelector("svg");
    clock.style.color = "transparent";
    svg.style.opacity = 1;
  }

  handleMouseLeave(e) {
    const clock = document.getElementById("clock");
    const svg = document.querySelector("svg");
    clock.style.color = "#ffff66";
    svg.style.opacity = 0;
  }

  handleDrag(e) {
    e.preventDefault();
    for (const f of e.dataTransfer.files) {
      ipcRenderer.send('ondrop', f.path);
    }
  }

  appendFileIcon(iconData) {
    let div = document.createElement('div');
    let img = document.createElement ('img');
    img.setAttribute('src', iconData);
    img.setAttribute('width', 70);
    img.setAttribute('height', 70);
    div.appendChild(img);
    this.self.appendChild(div);
  }

}