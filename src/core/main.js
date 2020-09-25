const { app, BrowserWindow, Tray, Menu, MenuItem } = require("electron");
const process = require("process");

const { initWindow } = require("./window.js");
const { buildMenuItems, initMenu, initTray } = require("./tray.js");

var tray, win, menu, menuItems;

function createWindow() {
  const win = initWindow();
  const menuItems = buildMenuItems();
  menuItems[0].click = () => {
    process.exit(0);
  }
  menuItems[1].click = () => {
    if (win.isVisible()) win.hide();
    else win.show();
  }
  const menu = initMenu(menuItems);
  tray = initTray(menu);
}

app.whenReady().then(createWindow);
console.log('app started');
