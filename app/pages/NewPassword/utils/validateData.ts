import type { ResetPasswordBody } from "@/app/services/api/reset-password";

export const validateData = (data: ResetPasswordBody | null) => {
  const errors: Partial<Record<keyof ResetPasswordBody, string>> = {};

  if (!data?.token)
    errors.token =
      "Link inválido! Solicite novamente o envio do e-mail na página de recuperar senha";

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

  return errors;
};
