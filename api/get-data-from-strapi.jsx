// export async getDataFromStrapi(url, params){
//     const baseUrl = process.env.BASE_URL
//     const query = `/api/${url}?${params}`
//     return await fetch (baseUrl + query)
// }
import React from "react";

function getDataFromStrapi(url, params) {
  const baseUrl = process.env.BASE_URL;
  const query = `/api/${url}?${params}`;
  return fetch(baseUrl + query);
}

export default getDataFromStrapi;
