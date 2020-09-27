class IconBuilder {
  constructor() {
    document.getElementById("event-receiver").innerHTML +=
      `<svg width="760px" height="100px">` + icons.directory + icons.file + `</svg>`;
    document.querySelector("svg > g > path").addEventListener('click', this.execExplorer);
  }

  execExplorer() {
    const { ipcRenderer } = require("electron");
    ipcRenderer.send('executeProgram', 'explorer');
  }
}

module.exports = {
  IconBuilder
};
