var myInput = document.getElementById("demo");
var back = document.getElementById("back");
var btn = document.getElementById("btn");
var yes = document.querySelector(".yes");
var alertbtn = document.querySelector(".alert");
var loading = document.querySelector("#loading");

alertbtn.style.display = "none";
loading.style.display = "none";

document.querySelector(".delete").addEventListener("click", function () {
  myInput.value = myInput.value.substring(0, myInput.value.length - 1);
});

var infos = JSON.parse(localStorage.getItem("infos"))
  ? JSON.parse(localStorage.getItem("infos"))
  : [];

function setT() {
  localStorage.setItem("infos", JSON.stringify(infos));
}

back.addEventListener("click", () => {
  window.location.href = "../Main/main.html";
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
