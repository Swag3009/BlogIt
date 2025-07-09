import axios from "axios";

import { POSTS } from "./constants";

const fetch = () => axios.get(POSTS);

const create = payload => axios.post(POSTS, { post: payload });

const postsApis = { fetch, create };

export default postsApis;
