import { Children, createContext, useContext } from "react";
import { Packages, Cart } from "./packageType";
import useCart, { UseCart } from "./hooks/useCart";
import usePackages, { UsePackages } from "./hooks/usePackage";
import useLogin, { LoginTypes } from "./hooks/useLogin";
import useAuth, { AuthTypes } from "./hooks/useAuth";
import useLoading, { Loading } from "./hooks/useLoading";

interface AppProps {
  children: React.JSX.Element;
}

export const GlobalContext = createContext({});

export const StoreProvider = ({ children }: AppProps) => {
  const cart = useCart();
  const packages = usePackages();
  const loginData = useLogin();
  const authentication = useAuth();
  const loading = useLoading();
  const store = {
    cart,
    packages,
    loginData,
    authentication,
    loading,
  };
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

interface Store {
  cart: UseCart;
  packages: UsePackages;
  loginData: LoginTypes;
  authentication: AuthTypes;
  loading: Loading;
}
export const useStore = () => {
  const store = useContext(GlobalContext) as Store;
  return store;
};
