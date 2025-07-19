import axios from "axios";

import { URL } from "./constants";

const signup = payload => axios.post(URL.USERS, { user: payload });

const authApi = { signup };

export default authApi;
