class EventReceiver {
  constructor() {
    document.body.innerHTML += '<div id="event-receiver"></div>'
    this.self = document.getElementById("event-receiver");
    this.self.addEventListener("mouseenter", this.handleMouseEnter);
    this.self.addEventListener("mouseleave", this.handleMouseLeave);
  }
  
  handleMouseEnter() {
    const clock = document.getElementById("clock");
    clock.style.color = "transparent";
  }

  handleMouseLeave() {
    const clock = document.getElementById("clock");
    clock.style.color = "#ffff66";
  }
}