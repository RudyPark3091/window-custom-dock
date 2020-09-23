const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    // window frame context
    width: 800,
    height: 100,
    x: 1980 / 2 - 400,
    y: 1080 - 100,
    resizable: false,
    frame: false,
    transparent: true,
    // on widget form context
    alwaysOnTop: true,
    skipTaskbar: true,
    hasShadow: true,
    closable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('./static/index.html');
}

app.whenReady().then(createWindow);