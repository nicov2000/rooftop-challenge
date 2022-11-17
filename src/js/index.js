import { getURL } from "./functions.js";

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    const container = document.querySelector(".container");

    if (!document.querySelector("#url")) {
        const a = document.createElement("a");
        const url = getURL();
        a.innerText = url;
        a.href = url;
        a.id = "url";
        a.target = "_BLANK";

        container.appendChild(a);
    }
});