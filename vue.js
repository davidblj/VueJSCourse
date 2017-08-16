Vue.component('tabs', {

    template: `

        <div>
             <div class="tabs">
                <ul>
                   <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive}">
                   <a :href="tab.href" @click="selectTab(tab)"> {{tab.name}}</li>
                </ul>
            </div>
            
            <div class="tabs-details">
                <slot></slot>
            </div>         
        </div>
       
    `,

    mounted() {
        // list all the child components inside this component:  3 tab elements.
        // note that for this line to work, we have to define a "tab" component (1)
        console.log(this.$children);
    },

    data() {

        // this variable must be initialized as an array
        return { tabs: [] };
    },

    // return all tabs in this variable, so we can reference the dynamically in our Bulma's tab class
    created() {
        this.tabs = this.$children;
    },

    // now we need to highlight the active tab. We do this by setting "tab.isActive = true" to the
    // clicked tab and "false" otherwise. We cant change the "selected" value as instructed by Vue,
    // and so that's why we created an additional variable

    methods: {

        selectTab(selectedTab) {

            // tab.isActive is also useful to show its contents
            this.tabs.forEach( tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }

});

// (1) We can now filter each tab with its corresponding name:
// $vm0.$children.forEach( tab => console.log(tab.name))
Vue.component('tab', {
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,

    props: {
        name: {required: true},
        selected: { default: false}
    },

    data() {

        return { isActive: false };

    },

    mounted() {
        this.isActive = this.selected;
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
        showModal: false
    }
});