import { get } from "axios";
import store from "../store";
import { locales } from "../utils/regions";

const protocol = "https://";
const host = ".api.blizzard.com/";

function getApiAccount({ region, account }) {
  const resource = `d3/profile/${account}`;
  const locale = locales[region];
  const access_token = store.state.oauth.accessToken;

  const API_URL = `${protocol}${region}${host}${resource}/?locale=${locale}&access_token=${access_token}`;

  return get(API_URL);
}

function getApiHero({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}`;
  const locale = locales[region];
  const access_token = store.state.oauth.accessToken;

  const API_URL = `${protocol}${region}${host}${resource}/?locale=${locale}&access_token=${access_token}`;

  return get(API_URL);
}

function getApiDetailedHeroItems({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}/items`;
  const locale = locales[region];
  const access_token = store.state.oauth.accessToken;

  const API_URL = `${protocol}${region}${host}${resource}/?locale=${locale}&access_token=${access_token}`;

  return get(API_URL);
}

export { getApiAccount, getApiHero, getApiDetailedHeroItems };
