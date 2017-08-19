Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {

            // trigger onCouponApplied.
            this.$emit('applied');
        }
    }
});


// rememeber to set our Vue instance at the end of this file.
new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },
    methods: {
        onCouponApplied() {
            alert('it was applied!');
            this.couponApplied = true;
        }
    }
});

