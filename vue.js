// We create a class to avoid calling "$on" and "$emit" every time we want to listen for events
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

Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {

            // trigger onCouponApplied. This time, any component can listen for changes
            // on Event
            Event.fire('applied');
        }
    }
});


// rememeber to set our Vue instance at the end of this file.
new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },
    created() {

        Event.listen('applied', () => alert('handling event'));
    }
});

