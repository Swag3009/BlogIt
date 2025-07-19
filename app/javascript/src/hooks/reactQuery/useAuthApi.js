import authApi from "apis/auth";
import { useMutation } from "react-query";

export const useSignUpUser = () =>
  useMutation({
    mutationFn: payload => authApi.signup(payload),
  });

export const useSignInUser = () =>
  useMutation({
    mutationFn: payload => authApi.signin(payload),
  });

export const useSignOutUser = () =>
  useMutation({
    mutationFn: authApi.signout,
  });
