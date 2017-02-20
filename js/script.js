"use strict;"

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

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
    }
];

let shownQuotes = [];

function getRandomQuote() {
    if (quotes.length === 0) {
        quotes = shownQuotes;
        shownQuotes = [];
    }
    let randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(`Index: ${randomIndex} Length: ${quotes.length}`);

    let randomQuote = quotes[randomIndex];

    quotes.splice(randomIndex, 1);
    shownQuotes.push(randomQuote);

    return randomQuote;
}

function printQuote() {
    let randomQuote = getRandomQuote();

    let html = `<p class="quote">${randomQuote.quote}</p>`;
        html += `<p class="source">${randomQuote.source}`;
        if (randomQuote.citation) {
            html += `<span class="citation">${randomQuote.citation}</span>`;
        }
        if (randomQuote.year)
            html += `<span class="year">${randomQuote.year}</span>`;
        html += "</p>";

    document.getElementById("quote-box").innerHTML = html;
}
