import axios from "axios";

const clientIdKey = import.meta.env.VITE_CLIENT_ID;
const clientSecretKey = import.meta.env.VITE_CLIENT_SECRET;
const authURL = import.meta.env.VITE_AUTH_URL;
const baseURL = import.meta.env.VITE_BASE_URL;
const fetchToken = async () => {
  try {
    const response = await axios.post(authURL, {
      grant_type: "client_credentials",
      client_id: clientIdKey,
      client_secret: clientSecretKey,
    });

    return response.data.access_token;
  } catch (error) {
    console.error(error);
  }
};

export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 20000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const addAuthorizationHeader = async () => {
  const accessToken = await fetchToken();
  if (accessToken) {
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;
  }
};
