const switchh = document.querySelector("#switch");
const smth = document.querySelector("body");
switchh.addEventListener("click", function () {
  if (smth.style.backgroundColor != "gray") smth.style.backgroundColor = "gray";
  else {
    smth.style.backgroundColor = "white";
  }
});
