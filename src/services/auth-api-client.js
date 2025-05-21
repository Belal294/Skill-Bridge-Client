import axios from "axios";


const authApiClient = axios.create({
  baseURL: "https://skill-bridge-ashen.vercel.app/api/v1",
});

authApiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authTokens");
    if (token) {
      config.headers.Authorization = `JWT ${JSON.parse(token).access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

authApiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const token = localStorage.getItem("authTokens");

    if (
      error.response?.status === 401 &&
      token &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const { refresh } = JSON.parse(token);
        const res = await axios.post("https://skill-bridge-ashen.vercel.app/api/v1/auth/jwt/refresh/", {
          refresh,
        });

        const newTokens = {
          access: res.data.access,
          refresh,
        };
        localStorage.setItem("authTokens", JSON.stringify(newTokens));

 
        originalRequest.headers.Authorization = `JWT ${res.data.access}`;
        return authApiClient(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("authTokens");
        window.location.href = "/login"; 
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default authApiClient;


// import axios from "axios";

// const authApiClient = axios.create({
//   baseURL: "http://127.0.0.1:8000/api/v1",
// });

// export default authApiClient;

// authApiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authTokens");
    
//     if (token) {
//       config.headers.Authorization = `JWT ${JSON.parse(token)?.access}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );