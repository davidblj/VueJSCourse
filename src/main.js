import Vue from 'vue'

const compartido = {
  usuario: {
    nombre: 'David'
  }
};

// we have seen how we can share variables within components through 'props' and events.  States are different. If i change
// the constant define here, all the components using this state, will also change their values.
// try issuing the command: $vm0.usuario.nombre = 'jaramillo'

new Vue({
  el: '#app',
  data: compartido
});

new Vue({
    el: '#app2',
    data: compartido
});