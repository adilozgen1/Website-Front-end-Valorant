//DROPDOWN MENÜ KISMI

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

//KARANLIK MOD

const darkButton = document.querySelector(".dark-container");
const body = document.querySelector("body");
const readmore = document.querySelector(".readmore");
const alt = document.querySelector(".alt");
const backgroundimg = document.querySelector(".background-img");

darkButton.addEventListener("click", () => {
  darkButton.classList.toggle("dark");
  if (darkButton.classList.contains("dark")) {
    readmore.style = `background-color: #0d0d0d; color: #f0f0f0`;
    body.style = `background-color: #0d0d0d; color: #f0f0f0`;
    backgroundimg.style = `background-image:images/backgroundd.gif;`;
  } else {
    readmore.style = `background-color: #AEC2B6; color: black`;
    body.style = `background-color: #AEC2B6; color: black`;
    backgroundimg.style = `background-image:none;`;
  }
});

//read more

let more = document.querySelectorAll(".more");
for (let i = 0; i < more.length; i++) {
  more[i].addEventListener("click", function () {
    more[i].parentNode.classList.toggle("active");
  });
}

//ALT KISIM

var left = document.querySelector("#left");
var rigt = document.querySelector("#right");
var img = document.querySelector("#img");

var rimg = [
  "images/w1.jpg",
  "images/w2.png",
  "images/w3.jpg",
  "images/w4.jpg",
  "images/w5.jpg",
  "",
];
var rimg2 = ["images/w"];
var toplam = 1;
right.addEventListener("click", function () {
  if (toplam < rimg.length - 1) {
    toplam++;
    img.src = rimg[toplam];
  }
  if (toplam == 5) {
    toplam = 0;
    img.src = rimg[toplam];
  }
});
left.addEventListener("click", function () {
  if (toplam < rimg.length) {
    toplam--;
    img.src = rimg[toplam];
  }
  if (toplam <= 0) {
    toplam = 4;
    img.src = rimg[toplam];
  }
});

//SKİL GÖSTERME

//chamber
var open1 = document.querySelector("#open1");
var form1 = document.querySelector(".form1");
var close1 = document.querySelector("#close1");

open1.onclick = function () {
  form1.style.display = "block";
};
close1.onclick = function () {
  form1.style.display = "none";
};

//raze
var open2 = document.querySelector("#open2");
var form2 = document.querySelector(".form2");
var close2 = document.querySelector("#close2");

open2.onclick = function () {
  form2.style.display = "block";
};
close2.onclick = function () {
  form2.style.display = "none";
};

//yoru

var open3 = document.querySelector("#open3");
var form3 = document.querySelector(".form3");
var close3 = document.querySelector("#close3");

open3.onclick = function () {
  form3.style.display = "block";
};
close3.onclick = function () {
  form3.style.display = "none";
};
