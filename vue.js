Vue.component('modal', {

    template: `
    <div class="modal  is-active">
            <div class="modal-background"></div>
            <div class="modal-content">

                <div class="box">
                    <slot></slot>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
        </div>
    `

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