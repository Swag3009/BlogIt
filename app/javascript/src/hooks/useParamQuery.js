import { useLocation } from "react-router-dom";

const useParamQuery = () => new URLSearchParams(useLocation().search);

export default useParamQuery;
