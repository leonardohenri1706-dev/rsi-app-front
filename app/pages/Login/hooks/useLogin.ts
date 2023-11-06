import type { AxiosError } from "axios";
import { toast } from "react-toastify";

import type { LoginBody } from "@/app/services/api/login";
import { login } from "@/app/services/api/login";
import { useRoutes } from "@/app/hooks";

const LoginErrorMessages = {
  USER_DOES_NOT_EXIST: "Não existe um usuário com esse e-mail",
  INVALID_PASSWORD: "Senha inválida",
};

type LoginErrorType = keyof typeof LoginErrorMessages;

interface LoginError {
  type: LoginErrorType;
  status: number;
  cause: string;
}

const defaultErrorMessage = "Falha ao realizar login!";

export const useLogin = (loginData: LoginBody) => {
  const { goToRespiratoryTractCheckUp } = useRoutes();

  return async () => {
    const loginPromise = login(loginData);

    toast.promise(loginPromise, {
      success: "Login realizado com sucesso! Redirecionando...",
      pending: "Realizando Login...",
    });

    try {
      const { token } = await loginPromise;

      window.localStorage.setItem("token", token);

      setTimeout(() => {
        goToRespiratoryTractCheckUp();
      }, 1000);
    } catch (err) {
      const error = err as AxiosError<LoginError>;
      const { type = "" } = error.response?.data || {};

      const isKnownError = Object.keys(LoginErrorMessages).includes(type);

      const errorMessage = isKnownError
        ? LoginErrorMessages[type as LoginErrorType]
        : defaultErrorMessage;

      toast.error(errorMessage);
    }
  };
};
