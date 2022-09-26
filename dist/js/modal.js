let modal = document.getElementById("myModal");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");
let modal4 = document.getElementById("myModal4");

let btn = document.getElementById("modalBtn");
let btn2 = document.getElementById("modalBtn2");
let btn3 = document.getElementById("modalBtn3");
let btn4 = document.getElementById("modalBtn4");

let closeBtn = document.getElementById('close');
let closeBtn2 = document.getElementById('close2');
let closeBtn3 = document.getElementById('close3');
let closeBtn4 = document.getElementById('close4');

btn.onclick = function() {
  modal.style.display = "flex";
  closeBtn.style.display = 'block';
};
btn2.onclick = function() {
  modal2.style.display = "flex";
  closeBtn2.style.display = 'block';
};
btn3.onclick = function() {
  modal3.style.display = "flex";
  closeBtn3.style.display = 'block';
};

btn4.onclick = function() {
  modal4.style.display = "flex";
  closeBtn4.style.display = 'block';
};


closeBtn.onclick = function() {
  modal.style.display = "none";
};
closeBtn2.onclick = function() {
  modal2.style.display = "none";
};
closeBtn3.onclick = function() {
  modal3.style.display = "none";
};

closeBtn4.onclick = function() {
  modal4.style.display = "none";
};