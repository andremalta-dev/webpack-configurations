import Title from "./components/title.js";
import Image from "./components/image.js";
import Button from "./components/button.js";

import warningTemplate from './templates/warning.html';
import './templates/warning.css';

import words from './assets/files/words.txt'

import description from './assets/files/description.json'

// Component with CSS
const title = new Title();
title.create("First Page");

// Component with Image
const image = new Image();
image.insertBobImage();

// Component with Sass
const button = new Button();
button.create();

// Babel Spread 
const car = {
  name: "Polo Highline",
  version: "200 tsi",
};
let { name, ...rest} = car
console.log(name);
console.log(rest);

// HTML Template 
const body = document.querySelector('body');
body.innerHTML += warningTemplate;

// Txt 
console.log(words.toUpperCase())

// JSON
console.log(description)