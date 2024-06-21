import { useEffect } from "react";

export const useAlert = (error: any) => {
  useEffect(() => {
    if (error) {
      let errorMsg = "Что то пошло не так.";

      if (typeof error === "object" && error?.Description) {
        errorMsg = error.description;
      }

      alert(errorMsg);
    }
  }, [error]);
};
