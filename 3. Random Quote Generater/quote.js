//Array of Quotes
var quotes = ["The only way to do great work is to love what you do. - Steve Jobs",
"Innovation distinguishes between a leader and a follower. - Steve Jobs",
"Your time is limited, don't waste it living someone else's life. - Steve Jobs",
"Stay hungry, stay foolish. - Steve Jobs",
"Life is what happens when you're busy making other plans. - John Lennon",
"Strive not to be a success, but rather to be of value. - Albert Einstein",
"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
"Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"];
//function to generate a random quote 

function generateQuote(){
    var randomIndex = Math.floor(Math.random () * quotes.length);
    var quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[randomIndex];
}
//Event listener for button click

var generation = document.getElementById('generateBtn');
generateBtn.addEventListener('click' , generateQuote);
