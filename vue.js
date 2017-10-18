// (1) We can now filter each tab with its corresponding name:
// $vm0.$children.forEach( tab => console.log(tab.name))
window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null){
        this.vue.$emit(event, data)
    }

    listen(event, callback){
        this.vue.$on(event, callback);
    }
};

Vue.component('tab', {
    template: `
      <li :class="{ 'is-active': isActive}"> <a @click="select()" >{{name}} {{isActive}}</a> </li>
      `,

    props: {
        name: {required: true},
        description: {required: true},
        selected: { default: false}
    },

    data() {

        return { isActive: true };

    },

    mounted() {
        this.isActive = this.selected;
    },

    methods: {
      select() {
        // this.isActive = true;
        // todo: emitir evento
        Event.fire('show', this.description);
      }
    },

    computed: {
        href()  {

            // about-us
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    }

});

// we need to notify our root instance that a change was made to some variable by one of
// our components. For that we define a custom event with the syntax $emit('nameOfTheCustomEvent').

// note that "is-active" class is always on. We control its visibility with Vuejs
new Vue({

    el: '#root',

    data: {
        description: 'maria'
    },
    created() {
      Event.listen('show', (description) => (this.description = description));
    }
});
