import axios from "axios";

import { POSTS_URL } from "./constants";

const fetch = () => axios.get(POSTS_URL);

const create = payload => axios.post(POSTS_URL, { post: payload });

const postsApis = { fetch, create };

export default postsApis;
