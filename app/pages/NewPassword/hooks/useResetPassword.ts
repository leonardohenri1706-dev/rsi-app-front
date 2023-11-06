import type { AxiosError } from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

import type { ResetPasswordBody } from "@/app/services/api/reset-password";
import type { ApiError } from "@/app/services/api/interfaces";
import { resetPassword } from "@/app/services/api/reset-password";
import { useRoutes } from "@/app/hooks";
import { validateData } from "../utils";

const RegistrationErrorMessages = {
  USER_DOES_NOT_EXIST: "Não existe um usuário com esse e-mail",
};

type ResetPasswordErrorType = keyof typeof RegistrationErrorMessages;

const defaultErrorMessage = "Falha ao alterar senha!";

export const useResetPassword = () => {
  const { goToLogin } = useRoutes();

  const [data, setData] = useState<ResetPasswordBody | null>(() => {
    const token = window.location.search.split("=")[1];
    return { token } as ResetPasswordBody;
  });

  const doResetPassword = async () => {
    const errors = validateData(data);
    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors) {
      for (const key in errors) {
        toast.error(errors[key as keyof ResetPasswordBody] as string);
      }
      return;
    }

    if (!data) return;

    const registrationPromise = resetPassword(data);

    toast.promise(registrationPromise, {
      success:
        "Senha alterada com sucesso! Redirecionando para a tela de login...",
      pending: "Alterando senha...",
    });

    try {
      await registrationPromise;

      setTimeout(() => goToLogin(), 1000);
    } catch (err) {
      const error = err as AxiosError<ApiError<ResetPasswordErrorType>>;
      const { type = "" } =
        error.response?.data || ({} as ApiError<ResetPasswordErrorType>);

      const isKnownError = Object.keys(RegistrationErrorMessages).includes(
        type as ResetPasswordErrorType
      );

      const errorMessage = isKnownError
        ? RegistrationErrorMessages[type as ResetPasswordErrorType]
        : defaultErrorMessage;

      toast.error(errorMessage);
    }
  };

  const getField = useCallback(
    (key: keyof ResetPasswordBody) => {
      if (!data) return "";

      return data[key] ?? "";
    },
    [data]
  );

  const setField = useCallback(
    (key: keyof ResetPasswordBody, value: string) => {
      const prevData = data ?? ({} as ResetPasswordBody);

      setData({ ...prevData, [key]: value });
    },
    [data]
  );

  return { doResetPassword, getField, setField };
};
