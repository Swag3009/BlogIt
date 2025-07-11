import axios from "axios";

import { URL } from "./constants";

const fetch = () => axios.get(URL.CATEGORIES);

const categoriesApi = {
  fetch,
};

export default categoriesApi;
