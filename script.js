var quote = document.getElementById("quote");
var button = document.getElementById("button");

var quotes = ["The only way to do great work is to love what you do.",

"The best way to predict the future is to invent it.",

"It’s not whether you get knocked down, it’s whether you get up.",

"Success is not final, failure is not fatal: It is the courage to continue that counts.",

"The harder you work for something, the greater you’ll feel when you achieve it." ,

"Don’t watch the clock; do what it does. Keep going." ,

"Believe you can and you're halfway there.",

"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." ,

"The secret of getting ahead is getting started." ,

"Your limitation—it’s only your imagination." ];
button.addEventListener("click",()=>{
    var rando = Math.floor(Math.random()*quotes.length);
    var group = quotes[rando];
    quote.innerHTML=group
})