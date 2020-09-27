class IconBuilder {
  constructor() {
    const { ipcRenderer } = require("electron");

    document.getElementById("event-receiver").innerHTML +=
      `<svg width="760px" height="100px">` + icons.directory + icons.file + icons.file2 + icons.file3 + `</svg>`;
    document.querySelector("svg > g > path").addEventListener('click', this.execExplorer);
    document.querySelector("svg > #g2 > path").addEventListener('click', this.execProgram);
    document.querySelector("svg > #g3 > path").addEventListener('click', this.execNotion);
  }

  execExplorer() {
    ipcRenderer.send('executeProgram', `start ${__dirname}`);
  }

  execProgram() {
    const path = require("path");
    ipcRenderer.send('executeProgram', 
      'C:/Users/grayb/AppData/Local/Discord/app-0.0.308/Discord.exe'
    );
  }

  execNotion() {
    ipcRenderer.send('executeProgram',
      `C:/Users/grayb/AppData/Local/Programs/Notion/Notion.exe`
    );
  }
}

module.exports = {
  IconBuilder
};
