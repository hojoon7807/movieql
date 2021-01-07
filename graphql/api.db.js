import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json"

export const getMoives = (limit, rating) => {
    let requestUrl = API_URL;
    if (limit > 0) {
        requestUrl += `?limit=${limit}`;
    }
    if (limit > 0 & rating > 0) {
        requestUrl += `&minimum_rating=${rating}`;
    } else if (rating > 0) {
        requestUrl += `?minimum_rating=${rating}`;
    }
    console.log(requestUrl);
    return fetch(requestUrl).then(res => res.json()).then(json => json.data.movies);
}
