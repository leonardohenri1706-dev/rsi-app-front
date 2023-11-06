import type { AxiosError } from "axios";
import { toast } from "react-toastify";

import type { ApiError } from "@/app/services/api/interfaces";
import { forgotPassword } from "@/app/services/api/forgot-password";
import { useRoutes } from "@/app/hooks";
import { useState } from "react";

const ForgotPasswordErrorMessages = {
  USER_DOES_NOT_EXIST: "Não existe um usuário com esse e-mail",
};

type ForgotPasswordErrorType = keyof typeof ForgotPasswordErrorMessages;

const defaultErrorMessage = "Falha ao enviar e-mail de recuperação de senha!";

export const useForgotPassword = () => {
  const { goToLogin } = useRoutes();

  const [email, setEmail] = useState<string>("");

  const doForgotPassword = async () => {
    if (!email) return toast.error("E-mail não pode ser vazio!");

    const forgotPasswordPromise = forgotPassword({ email });

    toast.promise(forgotPasswordPromise, {
      success:
        "E-mail de recuperação de senha enviado! Redirecionando para login...",
      pending: "Enviando e-mail de recuperação de senha...",
    });

    try {
      await forgotPasswordPromise;

      setTimeout(() => {
        window.history.replaceState({}, "", "/");
        goToLogin();
      }, 1000);
    } catch (err) {
      const error = err as AxiosError<ApiError<ForgotPasswordErrorType>>;
      const { type = "" } =
        error.response?.data || ({} as ApiError<ForgotPasswordErrorType>);

      const isKnownError = Object.keys(ForgotPasswordErrorMessages).includes(
        type as ForgotPasswordErrorType
      );

      const errorMessage = isKnownError
        ? ForgotPasswordErrorMessages[type as ForgotPasswordErrorType]
        : defaultErrorMessage;

      toast.error(errorMessage);
    }
  };

  return { email, setEmail, doForgotPassword };
};
