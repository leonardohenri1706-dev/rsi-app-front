import type { RegistrationBody } from "@/app/services/api/registration";

export const validateData = (data: RegistrationBody | null) => {
  const errors: Partial<Record<keyof RegistrationBody, string>> = {};

  if (!data?.email) errors.email = "E-mail é obrigatório";

  if (!data?.name) errors.name = "Nome é obrigatório";

  if (!data?.password) errors.password = "Senha é obrigatória";

  if (!data?.passwordConfirmation)
    errors.passwordConfirmation = "Confirmação de senha é obrigatória";

  if (
    data?.password &&
    data?.passwordConfirmation &&
    data?.password !== data?.passwordConfirmation
  )
    errors.passwordConfirmation = "As senhas não conferem";

  if (data?.password && data?.password.length < 6)
    errors.password = "A senha deve ter no mínimo 6 caracteres";

  if (!data?.intubation_experience)
    errors.intubation_experience = "Experiência em intubação é obrigatória";

  return errors;
};
