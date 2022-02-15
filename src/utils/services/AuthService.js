import $api from "../http";

export default class AuthService {
  static async login(email, password) {
    return $api
      .post("/login", { email, password })
      .then((response) => response.json());
  }

  static async registration(nickname, email, password) {
    return $api
      .post("/registration", { casenick: nickname, email, password })
      .then((response) => response.json());
  }

  static async logout() {
    return $api.get("/logout").then((response) => response.json());
  }
}
