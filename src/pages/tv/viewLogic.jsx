import React, { useState, useEffect } from "react";
import { tvApi } from "../../api";

const useLogic = (state, setState) => {
  const asyncFunction = async () => {
    setState({
      ...state,
      loading: true,
    });
    try {
      const topRated = await tvApi.topRated();
      const popular = await tvApi.popular();
      const airingToday = await tvApi.airingToday();
      setState({
        ...state,
        topRated: topRated.data.results,
        popular: popular.data.results,
        airingToday: airingToday.data.results,
        loading: false,
      });
    } catch {
      setState({ ...state, error: "Can't find Tvs information." });
    }
  };

  useEffect(() => {
    asyncFunction();
  }, []);
};

export default useLogic;
