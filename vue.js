Vue.component('mensaje', {

    // parameter values that this component will receive
    props: ['title', 'body'],

    data() {
        return {
            isVisible: true
        };
    },

    // v-show will hide its element if is set to true. We manipulate this variable with
    // the method "hideModal"
    template: ` 
     <article class="message" v-show="isVisible">
            <div class="message-header">
                {{title}}
                <button type="button" @click="hideModal">x</button>
            </div>
            <div class="message-body">
                {{body}}
            </div>
        </article>`,

    methods: {

        hideModal() {
            this.isVisible = false;
        }
    }
});

new Vue({

   el: '#root'
});