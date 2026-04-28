import API from "../api/axios";

export const signupUser = async (data) => {
  const res = await API.post("/auth/signup", data);
  return res.data;
};

export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

export const logoutUser = async () => {
  const res = await API.post("/auth/logout");
  return res.data;
};

export const protectedData = async () => {
  const res = await API.get("/auth/protected");
  return res.data;
};

export const getMe = async () => {
  const res = await API.get("/auth/me");
  return res.data;
};