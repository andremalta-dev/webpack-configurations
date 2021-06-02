import Header from './components/header/header.js'

const header = new Header();
header.create("Webpack Plugins");

// Define Plugin Use
console.log(VERSION);
console.log(PORT);

// Dotenv Plugin Use
console.log(process.env.API_KEY)