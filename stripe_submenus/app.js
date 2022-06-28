import sublinks from "./data.js";
import getElement from "./getElement.js";

const toggleBtn = getElement(".toggle-btn");
const closeBtn = getElement(".close-btn");
const sidebarWrapper = getElement(".sidebar-wrapper");
const sidebar = getElement(".sidebar-links");
const linkBtns = [...document.querySelectorAll(".link-btn")];

// const submenu = getElement(".submenu");
const hero = getElement(".hero");
const nav = getElement(".nav");

// hide/show sidebar

closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});
toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
});

// set sidebar

sidebar.innerHTML = sublinks
  .map((item) => {
    const { links, page } = item;
    return `<article>
    <h4>${page}</h4>
    <div class="sidebar-sublinks">${links
      .map((link) => {
        const { label, icon, url } = link;
        return `<a href="${url}">
        <i class="${icon}"></i>${label}
        </a>`;
      })
      .join("")}</div>
    </article>`;
  })
  .join("");
