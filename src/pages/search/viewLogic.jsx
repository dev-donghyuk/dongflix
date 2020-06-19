import { useState } from "react";
import { movieApi, tvApi } from "./../../api";
import { useEffect } from "react";
const useLogic = () => {
  const [state, setState] = useState({
    movieResult: null,
    tvResults: null,
    searchTerm: "code",
    error: null,
    loading: true,
  });
  const searchByTerm = async () => {
    setState({ ...state, loading: true });
    try {
      var movieResults = await movieApi.search(state.searchTerm);
      // console.log(movieResults.data.results);
      var tvResults = await tvApi.search(state.searchTerm);
      // console.log(tvResults.data.results);
      setState({ ...state, ...movieResults.data, loading: false });
    } catch {
      setState({ ...state, error: "Can't find results." });
      alert("error");
    } finally {
    }
  };
  const handleSubmit = () => {
    if (state.searchTerm !== "") {
      searchByTerm();
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);
};

export default useLogic;
