const axios = require("axios");
exports.handler = function (event, context, callback) {
  const url = `https://api.rootnet.in/covid19-in/stats/latest`;
  axios.get(url).then((res) => {
    const summary = res.data.data.summary;

    const msg = {
      replies: [
        {
          message: `Confirmed cases *${summary.total}* ✅ \n
          Deaths *${summary.deaths}* 🏴‍☠️\n
          Recovered *${summary.discharged}* 🥳`,
        },
      ],
    };
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(msg),
    });
  });
};
