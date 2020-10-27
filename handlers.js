const request = require("request-promise");
const { getDadJoke } = require("./__workshop/exercise-4.1");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
const { getGeekJoke } = require("./__workshop/exercise-4.3");

const handleJoke = async (req, res) => {
  const type = req.params.type;
  try {
    switch (type) {
      case "dad":
        const dadJoke = await getDadJoke();
        res.status(200).json({ status: 200, joke: dadJoke });
      case "tronald":
        const tronaldQuote = await getTronaldDumpQuote();
        res.status(200).json({ status: 200, joke: tronaldQuote });
      case "geek":
        const geekJoke = await getGeekJoke();
        res.status(200).json({ status: 200, joke: geekJoke });
      default:
        res
          .status(400)
          .json({ status: 400, message: "unrecognized type of joke" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { handleJoke };
