class IconBuilder {
  constructor() {
    const { ipcRenderer } = require("electron");

    document.getElementById("event-receiver").innerHTML +=
      `<svg width="760px" height="100px" fill="#ffff66">`
      + icons.directory2
      + icons.file
      + icons.file2
      + icons.file3
      + icons.file4
      + `</svg>`;
    document.querySelector("svg > #directory2 > path").addEventListener('click', this.execExplorer);
    document.querySelector("svg > #file1 > path").addEventListener('click', this.execCertainPath);
    document.querySelector("svg > #g2 > path").addEventListener('click', this.execProgram);
    document.querySelector("svg > #g3 > path").addEventListener('click', this.execNotion);
    document.querySelector("svg > #g4 > path").addEventListener('click', this.execChrome);
  }

  execExplorer() {
    ipcRenderer.send('executeProgram', 'explorer');
  }

  execCertainPath() {
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

  execChrome() {
    ipcRenderer.send('executeProgram',
      'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
    );
  }
}

module.exports = {
  IconBuilder
};
