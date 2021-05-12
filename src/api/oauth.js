import { post } from "axios";

const clientId = "7d8205610de34cd2b7697b10a1b708fc";
const clientSecret = "SWMMoz7Nub4FVdzZF6YLrIWqq96h4zQT";

const region = "eu";
const API_URL = `https://${region}.battle.net/oauth/token`;

function getToken() {
  const body = new FormData();

  body.append("grant_type", "client_credentials");

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
    auth: { username: clientId, password: clientSecret },
  };

  return post(API_URL, body, config);
}

export { getToken };
