import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cantidad: 0,
    },
    // setter or mutation
    mutations: {
        aumentar: (state) => state.cantidad++,
        reducir: (state) => state.cantidad--
    }
});