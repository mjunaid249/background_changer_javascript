const main = document.querySelector("main");

const all_btns = document.querySelectorAll(".color-btn");

const all_btns_array = Array.from(all_btns);

all_btns_array.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("red")) {
      main.style.backgroundColor = "red";
    } else if (btn.classList.contains("blue")) {
      main.style.backgroundColor = "blue";
    } else if (btn.classList.contains("green")) {
      main.style.backgroundColor = "green";
    } else if (btn.classList.contains("cyan")) {
      main.style.backgroundColor = "cyan";
    } else if (btn.classList.contains("crimson")) {
      main.style.backgroundColor = "crimson";
    } else if (btn.classList.contains("yellow")) {
      main.style.backgroundColor = "yellow";
    } else if (btn.classList.contains("default")) {
      main.style.backgroundColor = "lightblue";
    }
  });
});
