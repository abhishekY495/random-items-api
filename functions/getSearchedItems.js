import { items } from "../items";

exports.handler = async (event, context) => {
  const query = event.queryStringParameters.query;
  const searchedItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  return {
    statusCode: 200,
    body: JSON.stringify(searchedItems),
  };
};
