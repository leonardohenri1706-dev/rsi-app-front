import type { AxiosError } from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

import type { RegistrationBody } from "@/app/services/api/registration";
import type { ApiError } from "@/app/services/api/interfaces";
import { registration } from "@/app/services/api/registration";
import { useRoutes } from "@/app/hooks";
import { validateData } from "../utils";

const RegistrationErrorMessages = {
  USER_WITH_EMAIL_EXISTS: "Já existe um usuário com esse e-mail",
};

type RegistrationErrorType = keyof typeof RegistrationErrorMessages;

const defaultErrorMessage = "Falha ao realizar cadastro!";

export const useRegistration = () => {
  const { goToDifficultIntubation } = useRoutes();

  const [data, setData] = useState<RegistrationBody | null>(null);

  const doRegistration = async () => {
    const errors = validateData(data);
    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors) {
      for (const key in errors) {
        toast.error(errors[key as keyof RegistrationBody] as string);
      }
      return;
    }

    if (!data) return;

    const registrationPromise = registration(data);

    toast.promise(registrationPromise, {
      success: "Cadastro realizado com sucesso! Redirecionando...",
      pending: "Realizando cadastro...",
    });

    try {
      const { token } = await registrationPromise;

      window.localStorage.setItem("token", token);

      setTimeout(() => goToDifficultIntubation(), 1000);
    } catch (err) {
      const error = err as AxiosError<ApiError<RegistrationErrorType>>;
      const { type = "" } =
        error.response?.data || ({} as ApiError<RegistrationErrorType>);

      const isKnownError = Object.keys(RegistrationErrorMessages).includes(
        type as RegistrationErrorType
      );

      const errorMessage = isKnownError
        ? RegistrationErrorMessages[type as RegistrationErrorType]
        : defaultErrorMessage;

      toast.error(errorMessage);
    }
  };

  const getField = useCallback(
    (key: keyof RegistrationBody) => {
      if (!data) return "";

      return data[key] ?? "";
    },
    [data]
  );

  const setField = useCallback(
    (key: keyof RegistrationBody, value: string) => {
      const prevData = data ?? ({} as RegistrationBody);

      setData({ ...prevData, [key]: value });
    },
    [data]
  );

  return { doRegistration, getField, setField };
};
