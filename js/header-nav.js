/* 토글 함수 다시 구현 */
const NavBtn = document.querySelector(".nav-rihgt__btn");
const NavInput = document.querySelector(".nav-rihgt__input");

function openCloseInput() {
  if (NavBtn.value === "off") {
    NavInput.style.display = "inline";
    NavBtn.value = "on";
  } else {
    NavInput.style.display = "none";
    NavBtn.value = "off";
  }
}

/* 스크롤시 nav 배경색과 아이콘 색이 바뀜*/
document.addEventListener("scroll", function () {
  const scrollevent = document.documentElement.scrollTop;
  const Nav = document.querySelector(".header-nav");
  const NavLeftText = document.querySelector(".findmovie__nav-left");
  const NavRightAlarm = document.querySelector(".nav-right__alarm-icon");

  if (scrollevent > 1) {
    Nav.style.background = `rgb(28, 25, 34)`;
    NavLeftText.style.color = "#cbc0ec";
    NavBtn.style.color = "#cbc0ec";
    NavRightAlarm.style.color = "#cbc0ec";
  } else {
    Nav.style.background = "";
    NavLeftText.style.color = "white";
    NavBtn.style.color = "white";
    NavRightAlarm.style.color = "white";
  }
});

/* 알람 아이콘 누르면 모달창 뜨고 모달창 이외를 누르면 꺼지게 */
// NavBtnAlarm.addEventListener("click", function () {
//   modalAlarm.style.display = "block";
// });
// window.onclick = function (event) {
//   if (event.target == modalAlarm) {
//     modalAlarm.style.display = "none";
//   }
// };

/* 알람 아이콘 마우스오버시 모달창이 보임- css로 구현함*/
// const modalAlarm = document.querySelector(".modal-wrap");
// const NavBtnAlarm = document.querySelector(".nav-right__alarm");

// onmouseenter = "OpenAlarmpopup";
// onmouseleave = "CloseAlarmpopup";

// function OpenAlarmpopup() {
//   modalAlarm.style.display = "block";
// }
// function CloseAlarmpopup() {
//   modalAlarm.style.display = "none";
// }
