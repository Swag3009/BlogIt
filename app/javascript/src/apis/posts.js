import axios from "axios";

import { POSTS_URL } from "./constants";

const fetch = () => axios.get(POSTS_URL);

const create = payload => axios.post(POSTS_URL, { post: payload });

const show = slug => axios.get(`/posts/${slug}`);

const postsApis = { fetch, create, show };

export default postsApis;
