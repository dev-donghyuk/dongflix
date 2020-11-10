import React from "react";
import Routes from "./Routes";

// redux
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux/redux";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
