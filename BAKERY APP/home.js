"use strict";

const scrole = document.querySelector(".btn");
const section2 = document.querySelector("#section--2");
scrole.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("scrol");

  section2.scrollIntoView({ behavior: "smooth" });
});

const scrole2 = document.querySelector(".btn-aboutUS");
const aboutUS = document.querySelector("#section--3");
scrole2.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("scrole");
  aboutUS.scrollIntoView({ behavior: "smooth" });
});
