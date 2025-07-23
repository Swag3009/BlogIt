import axios from "axios";

import { URL } from "./constants";

const fetch = (params = {}) => axios.get(URL.POSTS, { params });

const fetchMyPosts = (params = {}) => axios.get(URL.MY_POSTS, { params });

const create = payload => axios.post(URL.POSTS, { post: payload });

const show = slug => axios.get(`${URL.POSTS}/${slug}`);

const update = (slug, payload) =>
  axios.put(`${URL.POSTS}/${slug}`, { post: payload });

const destroy = slug => axios.delete(`${URL.POSTS}/${slug}`);

const postsApis = { fetch, create, show, update, destroy, fetchMyPosts };

export default postsApis;
