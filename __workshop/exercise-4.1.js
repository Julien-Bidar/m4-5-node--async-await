const request = require("request-promise");

const getDadJoke = async () => {
  try {
    let options = {
      uri: "https://icanhazdadjoke.com/",
      headers: {
        Accept: "application/json",
      },
    };
    const response = await request(options);
    const joke = JSON.parse(response);
    return joke.joke;
  } catch (err) {
    console.log("Error: ", err);
  }
};

// 4.1
getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };
