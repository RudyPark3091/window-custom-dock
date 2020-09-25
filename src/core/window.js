const { BrowserWindow } = require("electron");
const settings = require("../config/window.json");

exports.initWindow = function () {
    const win = new BrowserWindow(settings);
    win.loadFile('../ui.html');
    return win;
};
