import { useLocation, useHistory } from "react-router-dom";

const useParamQuery = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search);

  const setQueryParam = (key, value) => {
    if (!value || value.length === 0) {
      query.delete(key);
    } else {
      query.set(key, value);
    }

    history.replace({
      pathname: location.pathname,
      search: `?${query.toString()}`,
    });
  };

  return { query, setQueryParam };
};

export default useParamQuery;
