const chars =
  "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuWwYyZz0123456789!@#$%^&*()_+-=[]{};'§£`~:|,./\\<>?";

const btn = document.querySelector("button");
const section = document.querySelector("section");
const inputM = document.querySelector(".many");
const inputL = document.querySelector(".lenght");

let codesNumber = 5;
let charsNumber = 10;

const codesGeneretor = () => {
  charsNumber = inputL.value;
  codesNumber = inputM.value;

  for (let i = 0; i < codesNumber; i++) {
    let code = "";
    for (let i = 0; i < charsNumber; i++) {
      const index = Math.floor(Math.random() * 90);
      code += chars[index];
    }
    const div = document.createElement("div");
    div.textContent = code;
    section.appendChild(div);
  }
};

btn.addEventListener("click", codesGeneretor);
