const productos = [
    {nombre: 'Steam Link', precio: 50},
    {nombre: 'Steam Controller', precio: 59},
    {nombre: 'Axiom Verge', precio: 17},
];

const mutations = {
    anadirProducto: (state, producto) => state.productos.unshift(producto),
};

// todo: fix this implementation; is not working
export default {
    state: productos,
    mutations: mutations,
};