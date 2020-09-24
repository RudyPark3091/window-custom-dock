const { app, BrowserWindow, Tray, Menu, MenuItem } = require("electron");
const process = require("process");

function createWindow() {
  
  tray = new Tray('./favicon.ico');

  const menuItemExit = { label: 'exit', type: 'normal', role: 'close' };
  menuItemExit.click = () => {
    process.exit(0);
  }
  
  const menuItemReload = { label: 'reload', type: 'normal', role: 'forceReload' };
  
  const hideToggle = { label: 'toggle Hide', type: 'normal' };
  hideToggle.click = () => {
    if (win.isVisible()) {
      win.hide();
    }
    else {
      win.show();
    }
  }

  const contextMenu = Menu.buildFromTemplate([ 
    menuItemExit, menuItemReload, hideToggle
  ]);

  tray.setToolTip('dock');
  tray.setContextMenu(contextMenu);

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
    show: true,
    acceptFirstMouse: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // win.setIgnoreMouseEvents(true);
  win.loadFile('../ui.html');
}

app.whenReady().then(createWindow);
console.log('app started');
