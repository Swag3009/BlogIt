import axios from "axios";

import { URL } from "./constants";

const fetch = () => axios.get(URL.CATEGORIES);

const create = payload => axios.post(URL.CATEGORIES, { category: payload });

const categoriesApi = {
  fetch,
  create,
};

export default categoriesApi;
