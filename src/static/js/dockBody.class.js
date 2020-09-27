class DockBody {
  constructor() {
    document.body.innerHTML += `<div id="dock-body"></div>`;
    this.dockBody = document.getElementById("dock-body");
  }
}

module.exports = {
  DockBody
};
