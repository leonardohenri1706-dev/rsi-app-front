import type { AxiosError } from "axios";
import { toast } from "react-toastify";

import type { ApiError } from "@/app/services/api/interfaces";
import { login } from "@/app/services/api/login";
import { useRoutes } from "@/app/hooks";
import { useState } from "react";
import { validateData } from "../utils";
import { useTranslation } from "react-i18next";

export const useLogin = () => {
  const { goToDifficultIntubation } = useRoutes();
  const { t } = useTranslation("common");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const ErrorMessages = {
    USER_DOES_NOT_EXIST: t("Pages.Login.ErrorMessages.USER_DOES_NOT_EXIST"),
    INVALID_PASSWORD: t("Pages.Login.ErrorMessages.INVALID_PASSWORD"),
  };
  type LoginErrorType = keyof typeof ErrorMessages;

  const defaultErrorMessage = t("Pages.Login.DefaultErrorMessage");

  const doLogin = async () => {
    const errors = validateData({ email, password }, t);

    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      for (const key in errors) {
        toast.error(errors[key as keyof typeof errors] as string);
      }
      return;
    }

    // MOCK LOGIN FOR DEVELOPMENT
    // const loginPromise = login({ email, password });

    // toast.promise(loginPromise, {
    //   success: t("Pages.Login.Success"),
    //   pending: t("Pages.Login.Pending"),
    // });

    // Mocking success
    try {
      toast.info("Mock Login - Bypassing Backend");

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const token = "mock-token-12345";
      window.localStorage.setItem("token", token);

      toast.success(t("Pages.Login.Success"));
      goToDifficultIntubation();

    } catch (err) {
      toast.error(defaultErrorMessage);
    }
  };

  return { email, password, setEmail, setPassword, doLogin };
};
