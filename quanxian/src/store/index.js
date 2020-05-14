import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        hasLogin: JSON.parse(window.localStorage.getItem("hasLogin")), // 是否登陆
        userInfo: JSON.parse(window.localStorage.getItem("userInfo")),
    },
    mutations: {
        login(state, provider) {
            state.hasLogin = true;
            state.userInfo = provider;
            window.localStorage.setItem("hasLogin", true);
            window.localStorage.setItem("userInfo", JSON.stringify(provider));
            window.localStorage.setItem("login_token", provider.token);
        },
        logout(state) {
            state.hasLogin = false;
            state.userInfo = {};
            window.localStorage.removeItem("hasLogin");
            window.localStorage.removeItem("userInfo");
            window.localStorage.removeItem("login_token");
        },
    },
    actions: {
        landed(content, obj) {
            // 登陆, obj为后端返回信息
            content.commit("login", obj);
        },
        dropOut(content) {
            // 注销
            content.commit("logout");
        },
    },
    modules: {},
});
