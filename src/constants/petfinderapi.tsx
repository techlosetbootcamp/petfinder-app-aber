
import axios from 'axios';

const fetchToken = async () => {
  const clientIdKey = "jIGqi9BJAWtWin2bKL06sZVg4WfOBQHyCQ0Nidm1aeNLJy69wh";
  const clientSecretKey = "c5POxzDIXbSda7aYBdw5cCsh9ipJyHQ9VsMx0JRi";

  try {
    const response = await axios.post(
      "https://api.petfinder.com/v2/oauth2/token",
      {
        grant_type: "client_credentials",
        client_id: clientIdKey,
        client_secret: clientSecretKey,
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error( error);
   
  }
};

export const axiosInstance = axios.create({
  baseURL: "https://api.petfinder.com/v2",
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


