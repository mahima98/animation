const on = document.querySelector(".on");

document.querySelector("input").onclick = function () {
  console.log("hi");
  this.classList.toggle("active");
};
