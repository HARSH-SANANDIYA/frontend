let newMode = document.querySelector(".btn");

let curMode = "light";

newMode.addEventListener("click", () => {
  if (curMode === "light") {
    curMode = "dark";
    document.body.style.backgroundColor = "black";
  } else {
    curMode = "light";
    document.body.style.backgroundColor = "white";
  }
  console.log(curMode);
});
