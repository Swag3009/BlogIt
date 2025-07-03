import axios from "axios";

const fetch = () => axios.get("/posts");

const postsApis = { fetch };

export default postsApis;
