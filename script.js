const quotes = [
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "In the end, we only regret the chances we didn't take.", author: "Lewis Carroll" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  { text: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "What we think, we become.", author: "Buddha" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Quality is not an act, it is a habit.", author: "Aristotle" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
  { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
  { text: "Try not to become a man of success. Rather become a man of value.", author: "Albert Einstein" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "Believe and act as if it were impossible to fail.", author: "Charles Kettering" },
  { text: "When something is important enough, you do it even if the odds are not in your favor.", author: "Elon Musk" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
  { text: "Perfection is not attainable, but if we chase perfection we can catch excellence.", author: "Vince Lombardi" },
  { text: "Small deeds done are better than great deeds planned.", author: "Peter Marshall" },
  { text: "The harder the conflict, the greater the triumph.", author: "George Washington" },
  { text: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link" },
  { text: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
  { text: "Do not be embarrassed by your failures, learn from them and start again.", author: "Richard Branson" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "In order to succeed, we must first believe that we can.", author: "Nikos Kazantzakis" },
  { text: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
  { text: "The best dreams happen when you’re awake.", author: "Cherie Gilderbloom" },
  { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "The biggest risk is not taking any risk.", author: "Mark Zuckerberg" },
  { text: "You can’t cross the sea merely by standing and staring at the water.", author: "Rabindranath Tagore" },
  { text: "If you want to achieve greatness stop asking for permission.", author: "Unknown" },
  { text: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Don't wait for opportunity. Create it.", author: "Unknown" },
  { text: "Sometimes later becomes never. Do it now.", author: "Unknown" },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Dream it. Wish it. Do it.", author: "Unknown" },
  { text: "Success is not for the lazy.", author: "Unknown" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
  { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
  { text: "Do something today that your future self will thank you for.", author: "Unknown" },
  { text: "Little things make big days.", author: "Unknown" },
  { text: "It’s going to be hard, but hard does not mean impossible.", author: "Unknown" },
  { text: "Don’t wait for the right moment. Take the moment and make it right.", author: "Unknown" },
  { text: "Success doesn’t come to you, you go to it.", author: "Marva Collins" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "Hustle until your haters ask if you’re hiring.", author: "Unknown" },
  { text: "Work hard in silence, let success be your noise.", author: "Frank Ocean" },
  { text: "Don’t quit. Suffer now and live the rest of your life as a champion.", author: "Muhammad Ali" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "Dream bigger. Do bigger.", author: "Unknown" },
  { text: "Great things take time.", author: "Unknown" },
  { text: "Stay positive, work hard, make it happen.", author: "Unknown" },
  { text: "Don’t limit your challenges. Challenge your limits.", author: "Unknown" },
  { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
  { text: "The best way out is always through.", author: "Robert Frost" },
  { text: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
  { text: "Be so good they can’t ignore you.", author: "Steve Martin" },
  { text: "The secret of success is to do the common thing uncommonly well.", author: "John D. Rockefeller Jr." },
  { text: "Work until your idols become your rivals.", author: "Unknown" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { text: "Do not be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
  { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
  { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" }
];

// DOM Elements
const quoteTextEl = document.getElementById("quote-text");
const quoteAuthorEl = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");

let lastIndex = -1;

function getRandomIndex(max) {
  let index;
  do {
    index = Math.floor(Math.random() * max);
  } while (index === lastIndex);
  lastIndex = index;
  return index;
}

function displayQuote() {
  // Fade out current quote
  quoteTextEl.classList.add("fade-out");
  quoteAuthorEl.classList.add("fade-out");

  setTimeout(() => {
    const idx = getRandomIndex(quotes.length);
    const { text, author } = quotes[idx];

    quoteTextEl.textContent = `"${text}"`;
    quoteAuthorEl.textContent = `— ${author}`;

    // Fade in new quote
    quoteTextEl.classList.remove("fade-out");
    quoteAuthorEl.classList.remove("fade-out");

    quoteTextEl.classList.add("fade-in", "color-animate");
    quoteAuthorEl.classList.add("fade-in", "color-animate");

    // Remove animation classes after animation ends
    setTimeout(() => {
      quoteTextEl.classList.remove("fade-in", "color-animate");
      quoteAuthorEl.classList.remove("fade-in", "color-animate");
    }, 2000);
  }, 500);
}

// Event listener
newQuoteBtn.addEventListener("click", displayQuote);

// Initial quote on page load
window.onload = displayQuote;
