var yes = document.getElementById("btn1");
yes.addEventListener("click", () => {
  alert("Aaa meri jaan, Love you too babu..!!💕");
});
const wt = document.documentElement.clientWidth - 1000;
const ht = document.documentElement.clientHeight - 400;
console.log(ht, wt);
var no = document.getElementById("btn2");
no.style.position = "relative";
no.addEventListener("mouseover", () => {
  do {
    var rw = Math.random(0, 1) * 1000;
  } while (rw > wt);
  do {
    var rh = Math.random(0, 1) * 1000;
  } while (rh > ht);
  console.log(rh, rw);
  no.style.top = rh + "px";
  no.style.left = rw + "px";
});
