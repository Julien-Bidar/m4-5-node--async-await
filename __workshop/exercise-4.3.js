const { json } = require("body-parser");
const request = require("request-promise");

const getGeekJoke = async () => {
  try {
    const response = await request(
      "https://geek-jokes.sameerkumar.website/api?format=json"
    );
    const joke = JSON.parse(response);
    return joke.joke;
  } catch (err) {
    console.log(err);
  }
};

getGeekJoke().then((joke) => console.log(joke));

module.exports = { getGeekJoke };
