import axios from "axios";

import { URL } from "./constants";

const fetch = () => axios.get(URL.ORGANIZATIONS);

const organizationsApi = { fetch };

export default organizationsApi;
