const { app, BrowserWindow, Tray, Menu, MenuItem } = require("electron");
const process = require("process");

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
    closable: false,
    hasShadow: true,
    focusable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  tray = new Tray('./favicon.ico');
  const menuItemExit = { label: 'exit', type: 'normal', role: 'close' };
  menuItemExit.click = () => {
    process.exit(0);
  }
  const menuItemSetting = { label: 'close', type: 'normal', role: 'close' };
  const menuItemReload = { label: 'reload', type: 'normal', role: 'forceReload' };
  const contextMenu = Menu.buildFromTemplate([ 
    menuItemExit, menuItemSetting, menuItemReload
  ]);
  tray.setToolTip('exit?');
  tray.setContextMenu(contextMenu);

  win.loadFile('./static/index.html');
}

app.whenReady().then(createWindow);
console.log('app started');
