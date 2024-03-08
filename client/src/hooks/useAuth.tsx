import React from "react";
import axios from "axios";
import { Console } from "console";
export interface AuthTypes {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
const useAuth = (): AuthTypes => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("access") !== null) {
      console.log(localStorage.getItem("access"));
      axios
        .post("http://localhost:8000/auth/verify/", {
          token: localStorage.getItem("access"),
        })
        .then((res) => {
          if (res.status === 200) {
            return setIsAuthenticated(true);
          } else {
            if (localStorage.getItem("refresh") !== null) {
              axios.post("http://localhost:8000/auth/refresh/").then((res) => {
                if (res.status === 2000) {
                  // save new access token to local storage
                  localStorage.setItem("access", res.data.access);
                  return setIsAuthenticated(true);
                }
              });
            } else {
              //navigate back to Login
              return;
            }
          }
        })
        .catch((err) => console.error(err.message));
    }
    // if token is not valid, refresh token,
    // if refreshed token is still not valid reroute to use navigate to Login page
  }, [isAuthenticated]);

  return {
    isAuthenticated,
    setIsAuthenticated,
  };
};
export default useAuth;
