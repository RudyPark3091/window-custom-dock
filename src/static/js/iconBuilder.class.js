class IconBuilder {
  constructor() {
    document.getElementById("event-receiver").innerHTML +=
      `<svg width="760px" height="100px">` + icons.directory + icons.file + `</svg>`;
  }
}

module.exports = {
  IconBuilder
};
