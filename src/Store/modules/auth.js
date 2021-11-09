import { userLogin } from "@/Services/User/userLogin";
const Key_Token = "token";
const Key_Email = "email";

const auth = {
  state: {
    token: localStorage.getItem(Key_Token) || "",
    email: localStorage.getItem(Key_Email) || "",
  },

  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setEmail(state, email) {
      state.email = email;
    },
  },

  actions: {
    login({ commit }, credentials) {
      return userLogin(credentials)
        .then((data) => {
          const { token, email } = data;
          console.log(data);
          localStorage.setItem(Key_Token, token);
          localStorage.setItem(Key_Email, email);

          commit("setToken", token);
          commit("setEmail", email);

          return email;
        })
        .catch((error) => {
          console.log("inside vuex");
          throw error;
        });
    },
    logout({ commit }) {
      localStorage.removeItem(Key_Token);
      localStorage.removeItem(Key_Email);

      commit("setToken", "");
      commit("setEmail", "");

      return Promise.resolve();
    },
  },
};

export default auth;
