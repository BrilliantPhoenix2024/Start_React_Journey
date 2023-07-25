import { Fragment } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useCallback } from "react";

function App() {
  const isAuth = useSelector((state) => state.auth.isAthenticated);

  return (
    <Fragment>
      <Header></Header>
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
