import axios from "axios";

const fetchPosts = () => axios.get("/posts");

const postsApi = { fetchPosts };

export default postsApi;
