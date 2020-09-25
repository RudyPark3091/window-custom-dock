class IconBuilder {
  constructor() {
    document.body.innerHTML +=
      `<svg width="800px" height="100px">` + icons.directory + icons.file + `</svg>`;
  }
}

module.exports = {
  IconBuilder
};
