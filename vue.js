Vue.component('task', {

    // the "slot" tag, takes in any text that is typed in the html file to be displayed as
    // text in our list item
    template: '<li><slot></slot></li>'
});

new Vue({

   el: '#root'
});