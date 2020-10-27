const request = require("request-promise");

const getTronaldDumpQuote = async () => {
  try {
    let options = {
      uri: "https://api.tronalddump.io/random/quote",
      headers: {
        Accept: "application/json",
      },
      json: true,
    };
    const response = await request(options);
    return response.value;
  } catch (err) {
    console.log(err);
  }
};

getTronaldDumpQuote().then((quote) => console.log(quote));

module.exports = { getTronaldDumpQuote };
