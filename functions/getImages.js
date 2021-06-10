const axios = require('axios');

exports.handler = async function (event) {
  const searchTerm = event.queryStringParameters.q;
  const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}`;

  try {
    const { data } = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const { status, statusText, headers, data } = error.response;
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};
