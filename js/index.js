let mySec = document.querySelector(".sec");
let myMen = document.querySelector(".men");
let myRest = document.querySelector(".rest");
function start() {
  mySec.innerHTML = +mySec.innerHTML + 1;
  if (mySec.innerHTML == 60) {
    mySec.innerHTML = "0";
    myMen.innerHTML = +myMen.innerHTML + 1;
  }
}
function rest() {
  myMen.innerHTML = 0;
  mySec.innerHTML = 0;
}
