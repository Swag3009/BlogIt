import axios from "axios";

import { URL } from "./constants";

const fetch = () => axios.get(URL.POSTS);

const create = payload => axios.post(URL.POSTS, { post: payload });

const show = slug => axios.get(`${URL.POSTS}/${slug}`);

const postsApis = { fetch, create, show };

export default postsApis;
