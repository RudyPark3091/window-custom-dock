class Clock {
  constructor() {
    this.date = new Date();
    this.time = this.date.toLocaleTimeString().substring(3);
    this.clockString = this.time[1] === ":" ? "0" + this.time : this.time;
    document.body.innerHTML +=
      '<div id="clock"></div>';
  }

  tick() {
    setInterval(() => {
      this.date = new Date();
      this.time = this.date.toLocaleTimeString().substring(3);
      this.clockString = this.time[1] === ":" ? "0" + this.time : this.time;
      document.getElementById("clock").innerHTML = this.clockString;
    }, 1000);
  }
}

module.exports = {
  Clock
};
