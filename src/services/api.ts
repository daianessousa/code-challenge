import axios from "axios";

const api = axios.create({
  baseURL:
    "https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=d9fdcb93bb5644dabd58c09af9c40458",
});

export default api;
