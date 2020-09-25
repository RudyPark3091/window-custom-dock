class DockBody {
  constructor() {
    document.body.innerHTML += `<div id="dock-body"></div>`;
    this.dockBody = document.getElementById("dock-body");
    // document.getElementById("event-receiver").addEventListener("mouseenter", this.handleMouseEnter);
    // document.getElementById("event-receiver").addEventListener("mouseleave", this.handleMouseLeave);
  }

  // handleMouseEnter() {
  //   const clock = document.getElementById("clock");
  //   clock.style.color = "transparent";
  // }

  // handleMouseLeave() {
  //   const clock = document.getElementById("clock");
  //   clock.style.color = "#ffff66";
  // }
}

module.exports = {
  DockBody
};
