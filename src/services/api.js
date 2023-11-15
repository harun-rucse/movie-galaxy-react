import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: `Bearer ${TMDB_TOKEN}`,
};

export async function fetchDataFromApi(url, params) {
  try {
    const { data } = await axios.get(API_BASE_URL + url, {
      headers,
      params,
    });

    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

export async function fetchConfiguration() {
  try {
    const { data } = await axios.get(API_BASE_URL + "/configuration", {
      headers,
    });

    const payload = {
      backdrop_path: data?.images?.secure_base_url + "original",
      poster_path: data?.images?.secure_base_url + "original",
      profile_path: data?.images?.secure_base_url + "original",
    };

    return payload;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
