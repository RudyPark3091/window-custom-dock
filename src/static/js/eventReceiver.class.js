class EventReceiver {
  constructor() {
    document.body.innerHTML += '<div id="event-receiver"></div>'
    this.self = document.getElementById("event-receiver");
    this.self.addEventListener("mouseenter", this.handleMouseEnter);
    this.self.addEventListener("mouseleave", this.handleMouseLeave);
  }
  
  handleMouseEnter() {
    const clock = document.getElementById("clock");
    const svg = document.querySelector("svg");
    clock.style.color = "transparent";
    svg.style.opacity = 1;
  }

  handleMouseLeave() {
    const clock = document.getElementById("clock");
    const svg = document.querySelector("svg");
    clock.style.color = "#ffff66";
    svg.style.opacity = 0;
  }
}