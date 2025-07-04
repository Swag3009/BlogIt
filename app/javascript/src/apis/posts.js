import axios from "axios";

import { POSTS } from "./constants";

const fetch = () => axios.get(POSTS);

const postsApis = { fetch };

export default postsApis;
