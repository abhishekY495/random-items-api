import { items } from "../items";

exports.handler = async (event, context) => {
  const query = event.queryStringParameters.query;
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
};
