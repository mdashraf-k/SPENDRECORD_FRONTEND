import API from "./api";

export async function login({ identifier, password }) {
  const data = await API.post("/auth/login", {
    identifier,
    password,
  });
  //   console.log(data.status);

  return data.status;
}

export async function loginGoogle(token) {
  await API.post("/auth/google", { token });
  // console.log(res);
}

export async function logout() {
  const res = await API.post("/auth/logout", { credentials: "include" });
  // console.log(res);
  return res;
}

export async function signup({ name, email, username, password }) {
  await API.post("/auth/signup", {
    name,
    email,
    username,
    password,
  });
  // console.log(res);
}
