import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cantidad: 0,
    },
    // setter or mutation
    mutations: {
        aumentar: (state, cantidad) => state.cantidad += cantidad,
        reducir: (state, cantidad) => state.cantidad -= cantidad
    },
    // actions is an object that can access the state and mutations.
    // We are going to simulate a change that is made asynchronously
    actions: {
        aumentarAsync: (context, objeto) => {
            setTimeout( () => context.commit('aumentar', objeto.cantidad), 2000)
        },
        // ES6 object destructuring
        reducirAsync: ({commit}, {cantidad}) => {
            setTimeout(() => commit('reducir', cantidad), 2000)
        }
    }
});