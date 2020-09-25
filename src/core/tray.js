const { Tray, Menu, MenuItem } = require("electron");
const settings = require("../config/tray.json");

exports.buildMenuItems = function () {
    let builtItems = [];
    settings.menuItems.forEach(item => {
        param = {
            label: item.label,
            type: item.type
        }
        builtItems.push(new MenuItem(param));
    });
    return builtItems;
}

exports.initMenu = function (menuItems) {
    const menu = Menu.buildFromTemplate(menuItems);
    return menu;
}

exports.initTray = function (menu) {
    const tray = new Tray(settings.iconPath);
    tray.setToolTip(settings.toolTip);
    tray.setContextMenu(menu);
    return tray;
}
