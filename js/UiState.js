class UiState {
  constructor() {
    this.hours = new Array();
    this.minutes = new Array();
    this.seconds = new Array();
  }

  setHours(val) {
    this.hours = this.splitIntoParts(val);
  }

  setMinutes(val) {
    this.minutes = this.splitIntoParts(val);
  }

  setSeconds(val) {
    this.seconds = this.splitIntoParts(val);
  }

  splitIntoParts(val) {
    let tens = Math.floor(val / 10);
    let ones = val % 10;

    let tensBit
    return {
      "tens" : (tens >>> 0).toString("2").padStart(3, "0"),
      "ones" : (ones >>> 0).toString("2").padStart(4, "0")
    }
  }
}
