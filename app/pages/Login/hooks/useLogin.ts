import type { AxiosError } from "axios";
import { toast } from "react-toastify";

import type { ApiError } from "@/app/services/api/interfaces";
import { login } from "@/app/services/api/login";
import { useRoutes } from "@/app/hooks";
import { useState } from "react";
import { validateData } from "../utils";

const LoginErrorMessages = {
  USER_DOES_NOT_EXIST: "Não existe um usuário com esse e-mail",
  INVALID_PASSWORD: "Senha inválida",
};

type LoginErrorType = keyof typeof LoginErrorMessages;

const defaultErrorMessage = "Falha ao realizar login!";

export const useLogin = () => {
  const { goToDifficultIntubation } = useRoutes();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const doLogin = async () => {
    const errors = validateData({ email, password });

    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      for (const key in errors) {
        toast.error(errors[key as keyof typeof errors] as string);
      }
      return;
    }

    const loginPromise = login({ email, password });

    toast.promise(loginPromise, {
      success: "Login realizado com sucesso! Redirecionando...",
      pending: "Realizando Login...",
    });

    try {
      const { token } = await loginPromise;

      window.localStorage.setItem("token", token);

      setTimeout(() => goToDifficultIntubation(), 1000);
    } catch (err) {
      const error = err as AxiosError<ApiError<LoginErrorType>>;
      const { type = "" } =
        error.response?.data || ({} as ApiError<LoginErrorType>);

      const isKnownError = Object.keys(LoginErrorMessages).includes(
        type as LoginErrorType
      );

      const errorMessage = isKnownError
        ? LoginErrorMessages[type as LoginErrorType]
        : defaultErrorMessage;

      toast.error(errorMessage);
    }
  };

  return { email, password, setEmail, setPassword, doLogin };
};
