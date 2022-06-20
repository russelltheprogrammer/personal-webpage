import taxes from "./images/taxes.jpg";
import cpaLogo from "./images/cpaLogo.jpg";
import calculator from "./images/calculator.jpg";
import space from "./images/space.jpg";
import stopWatch from "./images/stopWatch.jpg";
import drumMachine from "./images/drumMachine.jpg";
import quote from "./images/quote.jpg";

// all images are open source except CPA Logo which is owned by Russell Monteith CPA PLLC

const colors = ["white", "red", "orange", "yellow", "green", "darkBlue", "#16063A", "violet"];

const flexItems = [ 
    { id: 0, title: "Tax Projection Application", url: "https://russelltheprogrammer.github.io/tax-projection-individual/", img: taxes, alt: "Taxes" },
    { id: 1, title: "Monteithtaxcpa.com", url: "http://monteithtaxcpa.com", img: cpaLogo, alt: "CPA Website" }, 
    { id: 2, title: "JavaScript Calculator", url: "https://russelltheprogrammer.github.io/javascript-calculator/", img: calculator, alt: "Calculator" }, 
    { id: 3, title: "Spacestagram", url: "https://russelltheprogrammer.github.io/spacestagram/", img: space, alt: "Space" }, 
    { id: 4, title: "25-5-Clock", url: "https://russelltheprogrammer.github.io/25-5-clock/", img: stopWatch, alt: "Stop Watch" }, 
    { id: 5, title: "Drum Machine", url: "https://russelltheprogrammer.github.io/drum-machine/", img: drumMachine, alt: "Drum Machine" }, 
    { id: 6, title: "Random Quote Machine", url: "https://russelltheprogrammer.github.io/random-quote-machine/", img: quote, alt: "Quote" }
 ];

export {colors, flexItems};
