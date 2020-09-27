const { ipcRenderer } = require("electron");

(function () {
  const clock = new Clock();
  clock.tick();
  const dockbody = new DockBody();
  const eventReceiver = new EventReceiver();
  const iconBuilder = new IconBuilder();
})();