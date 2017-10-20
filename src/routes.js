import home from './components/home.vue';
import contacto from './components/contacto.vue';
import usuario from './components/usuario.vue'

export const routes = [
  {path: '/home', component: home},
  {path: '/contacto', component: contacto},
  {path: '/usuario/:id', component: usuario}
];
