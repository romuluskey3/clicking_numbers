//color arrrays
let colors = ["blue", "purple", "orange"];

function Counter(color) {
  
  // new div element

  this.div = document.createElement("div");

  //properties

  this.div.innerHTML = 0;

  this.div.style.width = "200px";

  this.div.style.height = "100px";

  this.div.style.backgroundColor = color;

  this.div.style.fontSize = "18px";

  this.div.style.verticalAlign = "middle";

  this.div.style.textAlign = "center";

  this.div.style.lineHeight = "100px";

  this.div.style.borderRadius = "10px";

  //defined in prototype

  this.initializeCounter();

  document.body.appendChild(this.div);
}

//prototype counter

Counter.prototype.initializeCounter = function () {
  this.div.addEventListener("click", fun);

  function fun() {
    this.innerHTML++;
  }
};

for (let color of colors) {
  new Counter(color);
}