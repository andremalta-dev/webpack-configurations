import './button.scss'

class Button {
  create() {
    const button = document.createElement("button");

    button.innerText = "Click here!";
    button.classList.add("btn");

    document.querySelector("body").appendChild(button);
  }
}

export default Button;
