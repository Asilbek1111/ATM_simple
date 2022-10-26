var btn = document.getElementById("btn");
var back = document.getElementById("back");
var yes = document.querySelector(".yes");
var alertbtn = document.querySelector(".alert");
var loading = document.querySelector("#loading");

alertbtn.style.display = "none";
loading.style.display = "none";

btn.addEventListener("click", function () {
  window.location = "../Main/main.html";
});

var myInput = document.getElementById("sum");
myInput.value = 0;
var infos = JSON.parse(localStorage.getItem("infos"))
  ? JSON.parse(localStorage.getItem("infos"))
  : [];

function setT() {
  localStorage.setItem("infos", JSON.stringify(infos));
}

back.addEventListener("click", () => {
  window.location = "../Main/main.html";
});

yes.addEventListener("click", () => {
  loading.style.display = "block";
  setTimeout(() => {
    alertbtn.style.display = "block";
    loading.style.display = "none";
    infos.push({ time: new Date().toLocaleString(), out: myInput.value });
    setT();
  }, 1800);
});
