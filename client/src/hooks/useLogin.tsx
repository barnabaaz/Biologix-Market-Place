import React from "react";
export interface LoginTypes {
  username: string;
  password: string;

  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const useLogin = (): LoginTypes => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return {
    username,
    password,
    setUsername,
    setPassword,
  };
};
export default useLogin;
