import axios from "axios";

import { URL } from "./constants";

const signup = payload => axios.post(URL.USERS, { user: payload });
const signin = payload => axios.post(URL.SESSION, { login: payload });

const authApi = { signup, signin };

export default authApi;
