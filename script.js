//button toggle the letters in the input
//change button text

const input = document.querySelector("input");
const but = document.querySelector("button");

function toggle(event) {
  event.preventDefault();
  if (input.type === "password") {
    input.type = "text";
    but.innerText = "Hide Password";
  } else {
    input.type = "password";
    but.innerText = "Show Password";
  }
}

document.addEventListener("submit", toggle);
