import getElement from "./utils/getElement.js";

const url = "https://randomuser.me/api/";
// https://randomuser.me/documentation

const img = getElement(".user-img");
const title = getElement(".user-title");
const value = getElement(".user-value");
const btn = getElement(".btn");
const btns = [...document.querySelectorAll(".icon")];
console.log(btns);

const fetchData = async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  console.log(data);
};

fetchData();
