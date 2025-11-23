
const axios = require('axios');

//Function for API
async function getQuote() {
  const url = 'https://zenquotes.io/api/random';

  try {
    const { data } = await axios.get(url);
    const item = Array.isArray(data) ? data[0] : null;
    if (!item || !item.q || !item.a) throw new Error('Bad API response'); // catches anything that would cause the API to fail and throws the error

    const { q, a } = item;
    console.log(`Here's a motivational quote for you: "${q}" - ${a}`);
  } catch (error) {
    const { q, a } = getRandomQuote();
    console.log(`API failed, here’s a special quote we saved for you! "${q}" - ${a}`);
  }
}

getQuote();

// Local library for failed API call so the user still gets a quote
// Quotes were pulled from https://zenquotes.io/api/quotes/[your_key]
const quotes_Lib = [
  {
    q: "It is difficult to free fools from the chains they revere.",
    a: "Voltaire",
    c: "59",
    h: "<blockquote>&ldquo;It is difficult to free fools from the chains they revere.&rdquo; &mdash; <footer>Voltaire</footer></blockquote>"
  },
  {
    q: "A person hears only what they understand.",
    a: "Johann Wolfgang von Goethe",
    c: "41",
    h: "<blockquote>&ldquo;A person hears only what they understand.&rdquo; &mdash; <footer>Johann Wolfgang von Goethe</footer></blockquote>"
  },
  {
    q: "What have you done today to make someone else happy?",
    a: "Deepam Chaterjee",
    c: "52",
    h: "<blockquote>&ldquo;What have you done today to make someone else happy?&rdquo; &mdash; <footer>Deepam Chaterjee</footer></blockquote>"
  },
  {
    q: "You are never too old to set another goal or to dream a new dream.",
    a: "Les Brown",
    c: "66",
    h: "<blockquote>&ldquo;You are never too old to set another goal or to dream a new dream.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>"
  },
  {
    q: "The wisest men follow their own direction.",
    a: "Euripides",
    c: "42",
    h: "<blockquote>&ldquo;The wisest men follow their own direction.&rdquo; &mdash; <footer>Euripides</footer></blockquote>"
  }
];

//Function to get random quote selection from quotes_Lib on failed API call
function getRandomQuote() {
  const ranQuote = Math.floor(Math.random() * quotes_Lib.length);
  return quotes_Lib[ranQuote];
}