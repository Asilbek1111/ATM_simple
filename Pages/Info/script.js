var back = document.getElementById("btn");
var overallH2 = document.getElementById("overallh2");

var overall = JSON.parse(localStorage.getItem("infos"));
var score = 2000;

overallH2.textContent = `Your current balance is ${score}`;
var localOverall = localStorage.getItem("overall")
  ? localStorage.getItem("overall")
  : [];

//For loop for overall fund


//all table

var infos = JSON.parse(localStorage.getItem("infos"))
  ? JSON.parse(localStorage.getItem("infos"))
  : [];

var list = document.getElementById("list");
infos.map((e) => {
  var info =
    (list.innerHTML += `<li class="list-group-item d-flex justify-content-between">
      <p class="col-6">${e.time}</p>
      <p class="col-2">${e.in === undefined ? 0 : e.in}</p>
      <p class="col-2">${e.out === undefined ? 0 : e.out}</p>
      <p class="col-2"></p>
      </li>`);
});

back.addEventListener("click", () => {
  window.location.href = "../Main/main.html";
});

console.log(localOverall);
