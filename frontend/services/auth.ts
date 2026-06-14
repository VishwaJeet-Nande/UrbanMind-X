import api from "./api";

import {
  LoginRequest,
  RegisterRequest,
  LoginResponse,
} from "@/types/auth";

export async function login(
  data: LoginRequest
): Promise<LoginResponse> {
  const response = await api.post(
    "/api/v1/auth/login",
    data
  );

  return response.data;
}

export async function register(
  data: RegisterRequest
) {
  const response = await api.post(
    "/api/v1/auth/register",
    data
  );

  return response.data;
}