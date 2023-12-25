import { items } from "../items";

exports.handler = async (event, context) => {
  const query = event.queryStringParameters.query;
  if (query) {
    if (query.trim().length !== 0) {
      const searchedItems = items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
        },
        body: JSON.stringify(searchedItems),
      };
    } else {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
        },
        body: JSON.stringify({ error: "Empty query parameter" }),
      };
    }
  } else {
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
      },
      body: JSON.stringify({ error: "Missing query parameter" }),
    };
  }
};
