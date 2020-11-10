const reducer = {
  isLoading: false,
};

export default (state = reducer, { type, payload, routeName }) => {
  switch (type) {
    case "SET_IS_LOADING":
      return { ...state, isLoading: payload };

    default:
      return state;
  }
};
