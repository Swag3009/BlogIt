import axios from "axios";

import { URL } from "./constants";

const signup = payload => axios.post(URL.USERS, { user: payload });
const signin = payload => axios.post(URL.SESSION, { login: payload });
const signout = () => axios.delete(URL.SESSION);

const authApi = { signup, signin, signout };

export default authApi;
