// in order to listen for events in components that are not related to each other, we crate a
// new Vue instance.
window.Event = new Vue();

Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {

            // trigger onCouponApplied. This time, any component can listen for changes
            // on Event
            Event.$emit('applied');
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

        Event.$on('applied', () => alert('handling event'));
    }
});

