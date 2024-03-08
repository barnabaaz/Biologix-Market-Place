import React, { SetStateAction } from "react";

export interface Loading {
  isLoading: false;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>;
}
const useLoading = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  return {
    isLoading,
    setIsLoading,
  };
};

export default useLoading;
