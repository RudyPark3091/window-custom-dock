const { app, BrowserWindow, Tray, Menu, MenuItem, nativeImage } = require("electron");
const { ipcMain } = require("electron");
const process = require("process");
const path = require("path");

const { initWindow } = require("./window.js");
const { buildMenuItems, initMenu, initTray } = require("./tray.js");
const { child } = require("./processExecutor.js");

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

ipcMain.on("executeProgram", (event, args) => {
  child(args);
});

ipcMain.on("ondrop", (event, filePath) => {
  console.log(filePath);
  app.getFileIcon(filePath, {size: "large"}).then(icon => {
    event.reply("iconReply", icon.toDataURL());
  });
});

app.whenReady().then(createWindow);
console.log('app started');
