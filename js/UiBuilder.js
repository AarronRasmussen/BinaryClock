class UiBuilder {
  #numOfBits = [
    {
      "tens" : 2,
      "ones" : 4
    },
    {
      "tens" : 3,
      "ones" : 4,
    },
    {
      "tens" : 3,
      "ones" : 4
    }
  ];

  constructor() {
    this.container = document.getElementById("clockContainer");
    this.uistate = new UiState();
  }

  run() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    this.uistate.setHours(hours);
    this.uistate.setMinutes(minutes);
    this.uistate.setSeconds(seconds);

    this.buildUi();
  }

  buildUi() {
    let hours = this.#numOfBits[0];
    let minutes = this.#numOfBits[1];
    let seconds = this.#numOfBits[2];

    this.buildUiHelper(hours, "hours");
    this.buildUiHelper(minutes, "minutes");
    this.buildUiHelper(seconds, "seconds");

    this.setTime("hours");
  }

  buildUiHelper(obj, name) {
    let div = document.createElement("div");
    div.id="tens_"+name;

    this.container.appendChild(div);

    for(let t = 0; t < obj.tens; t++) {
      let circle = document.createElement("div");
      circle.className = "circle";
      circle.id = "tens"+name+t;

      this.container.lastChild.appendChild(circle);
    }

    let div2 = document.createElement("div");
    div2.id = "ones_"+name;

    this.container.appendChild(div2);

    for(let o = 0; o < obj.ones; o++) {
      let circle = document.createElement("div");
      circle.className = "circle";
      circle.id = "ones"+name+o;
      this.container.lastChild.appendChild(circle);
    }
  }

  setTime(name) {
    if(name == "hours") {
      var tensHours = Array.from(document.getElementById("tens_hours").children).reverse();

      for(var itr = 0; itr < this.uistate.hours.tens.length; itr++) {
        var bit = this.uistate.hours.tens.charAt(itr);

        if(bit == "1") {
          tensHours[itr].style.backgroundColor="black";
        }
        else {
          tensHours[itr].style.backgroundColor="white";
        }
      }

      var onesHours = Array.from(document.getElementById("ones_hours").children).reverse();

      for(var itr = 0; itr < this.uistate.hours.ones.length; itr++) {
        var bit = this.uistate.hours.ones.charAt(itr);

        if(bit == "1") {
          onesHours[itr].style.backgroundColor="black";
        }
        else {
          onesHours[itr].style.backgroundColor="white";
        }
      }
    }
    else if(name == "minutes") {

    }
    else if(name == "seconds") {

    }
  }
}
