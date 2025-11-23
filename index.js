const axios = require('axios');

        async function getQuote() {
            const url = 'https://zenquotes.io/api/random';
            try {
                const { data } = await axios.get(url, {
                });

                const { q, a } = data[0];
                    console.log(`Here's a motivational quote for you: "${q}" - ${a}`);
            } catch (err) {
                console.error('Could not fetch a quote. Try again later.');
                displayQuote.textContent = "Could not fetch a quote. Try again later.";
            }
        }
        getQuote();