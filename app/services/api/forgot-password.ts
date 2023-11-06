import api from "./api";

export const forgotPassword = async (email: string) => {
  return api.post("/forgot-password", { email });
};
