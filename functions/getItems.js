import { items } from "../items";

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
