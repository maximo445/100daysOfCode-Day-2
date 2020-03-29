const colorValues = ["1","2","3","4","5","6","7","8","9",
"A","B","C","D","E","F"]

let currentColor;

function color () {

  let hexColorValue = "#";
  let hexValue;

  for (let i = 0; i < 6; i++) {
    hexValue = Math.floor(Math.random() * colorValues.length);
    hexColorValue += colorValues[hexValue];
  }

  return hexColorValue;

}

let myContent = document.getElementById('myContent');

let contentWidth = (myContent.offsetWidth / 2).toString();

let stringTemporary = "-" + contentWidth + "px";

myContent.style.marginLeft = stringTemporary;

const hexColor = document.getElementById('hexColor');
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', () => {

  currentColor = color();

  document.body.style.backgroundColor = currentColor;
  hexColor.innerHTML = "Hex Color: " + currentColor;
});
