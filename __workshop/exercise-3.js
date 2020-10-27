// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise((resolve) => {
    console.log("wait 2sec");
    setTimeout(() => {
      num = num * 2;
      resolve(num);
    }, 2000);
  });
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  const firstDouble = await doublesLater(num);
  const secondDouble = await doublesLater(firstDouble);
  return doublesLater(secondDouble);
};

// 4. verification
handleSum(10).then((ans) => console.log(ans));
