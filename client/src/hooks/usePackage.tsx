import React from "react";
import { Packages } from "../packageType";
import axios from "axios";

export interface UsePackages {
  packages: Packages[];
  setPackages: React.Dispatch<React.SetStateAction<Packages[]>>;
}
const usePackages = (): UsePackages => {
  const [packages, setPackages] = React.useState<Packages[]>([]);
  const [filterParameter, setFilterParameter] = React.useState<String>("all");

  const baseUrl = "http://127.0.0.1:8000/api/packages/";
  // "https://uat.crelio.solutions/getAllTestsAndProfiles/?token=f1195bf4-c03f-11ee-b2f0-199e4cee92dc";
  React.useEffect(() => {
    axios
      .get(baseUrl)
      .then((res: any) => {
        if (res.status === 200) {
          const filteredData = res.data.filter(
            (item: Packages) => item.packageCategory === filterParameter
          );
          if (filterParameter === "all") {
            setPackages(res.data);
          } else {
            setPackages(filteredData);
          }
        }
      })
      .catch((err) => console.error(err.messages));
  }, []);
  return {
    packages,
    setPackages,
  };
};
export default usePackages;
