import request from './request.js';
const URL = "https://pwcfrontendtest.azurewebsites.net/login";
const URLLIST = "https://pwcfrontendtest.azurewebsites.net/getlist";


export function login(userInfo) {
  return request.post(URL, userInfo);
}

export function getList() {
  return request.get(URLLIST);
}