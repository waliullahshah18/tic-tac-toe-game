let boxes = document.getElementsByClassName("box");
let img = document.querySelector(".img1");
let line = document.querySelector(".line");
let wins = new Audio("winsound.mp3")
let body = document.body;
let music = new Audio("music.mp3");
let turns = new Audio("ting.mp3");
let gameovers = new Audio("gameover.mp3");
let resats = document.getElementById("resat");
let turn = "X";
let gameover = false;

window.onload = function () {
  // music.play();
};

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  let win = [
    [0, 1, 2, 0, 1, 12, 82],
    [3, 4, 5, 0, 1, 12, 222],
    [6, 7, 8, 0, 1, 12, 360],
    [0, 3, 6, 90, 1, 30, -69],
    [1, 4, 7, 90, 1, 30, -207],
    [2, 5, 8, 90, 1, 30, -345],
    [0, 4, 8, 45, 1, 111, 11],
    [6, 4, 2, -45, 1, -205, 304],
  ];
  win.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerHTML = boxtexts[e[0]].innerText + " Won";
      gameover = true;
      img.style.width = "200px";
      wins.play()
      line.style.transform = `rotate(${e[3]}deg) scale(${e[4]}) translate(${e[5]}px, ${e[6]}px)`;
      line.style.opacity= "1";
    }
  });
};
Array.from(boxes).forEach((element) => {
  let boxtexts = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtexts.innerText === "") {
      boxtexts.innerText = turn;
      turn = changeTurn();
      turns.play();
      checkWin();
      if (!gameover) {
        document.getElementsByClassName("info")[0].innerHTML =
          "Turn For " + turn;
      }
    }
  });
});

resats.addEventListener("click", () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X"
  gameover = false;
  document.getElementsByClassName("info")[0].innerHTML = "Turn For " + turn;
  img.style.width = "0px";
  line.style.opacity="0"
});
