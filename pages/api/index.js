import { setCookie } from "cookies-next";

export default async function handler(req, res) {
  const { color } = req.query;
  setCookie("chakra-ui-color-mode", color, { req, res });
  console.log(color);
  res.end(JSON.stringify(color));
}
