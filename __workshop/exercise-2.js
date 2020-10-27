// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require("request-promise");

const getIssPosition = async () => {
  try {
    const response = await request("http://api.open-notify.org/iss-now");
    const issLocation = JSON.parse(response);
    return {
      lat: issLocation.iss_position.latitude,
      lng: issLocation.iss_position.longitude,
    };
  } catch (err) {
    console.log("Error: ", err);
  }
};

//console.log(getIssPosition());
getIssPosition().then((result) => console.log(result));

// const log = async () => {
//   const issPos = await getIssPosition();
//   console.log(issPos);
// };

// log();
