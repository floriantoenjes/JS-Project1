"use strict;"

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Initialize the quote array
let quotes = [
    {
        quote: "If your hate could be turned into electricity, it would light up the whole world.",
        source: "Nikola Tesla"
    },
    {
        quote: "You can spend minutes, hours, days, weeks, or even months over-analyzing a situation; trying to put the pieces together, justifying what could've, would've happened... or you can just leave the pieces on the floor and move the fuck on.",
        source: "Tupac Shakur"
    },
    {
        quote: "In a dark place we find ourselves, and a little more knowledge lights our way.",
        source: "Yoda",
        citation: "Star Wars: Episode III",
        year: 2005
    },
    {
        quote: "I’m not in this world to live up to your expectations and you’re not in this world to live up to mine.",
        source: "Bruce Lee"
    },
    {
        quote: "We cannot solve our problems with the same thinking we used when we created them.",
        source: "Albert Einstein"
    }
];

// Already shown quotes go here
let shownQuotes = [];

// Generate a random number between 0 and 255;
function getRandomColorValue() {
    return Math.floor(Math.random() * 256);
}

// Generate a random RGB color value
function getRandomColor() {
    let red = getRandomColorValue();
    let green = getRandomColorValue();
    let blue = getRandomColorValue();

    return `rgb(${red}, ${green}, ${blue})`
}

// Get a random quote
function getRandomQuote() {
    // If all quotes have been shown do a reset
    if (quotes.length === 0) {
        quotes = shownQuotes;
        shownQuotes = [];
    }

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
    console.log(`Quote: ${randomQuote.quote}`);

    // Remove the shown quote from the quotes array
    quotes.splice(randomIndex, 1);
    // Push the shown quote into the shownQuotes array
    shownQuotes.push(randomQuote);

    return randomQuote;
}

function printQuote() {
    let randomQuote = getRandomQuote();

    // Build the html
    let html = `<p class="quote">${randomQuote.quote}</p>`;
        html += `<p class="source">${randomQuote.source}`;
        if (randomQuote.citation) {
            html += `<span class="citation">${randomQuote.citation}</span>`;
        }
        if (randomQuote.year)
            html += `<span class="year">${randomQuote.year}</span>`;
        html += "</p>";

    // Set the HTML
    document.getElementById("quote-box").innerHTML = html;

    // Let the background change it's color
    const body = document.getElementsByTagName("body")[0];
    body.style = "background-color: " + getRandomColor();
}

// Refresh the quote every 30 seconds
setInterval(printQuote, 30000);
