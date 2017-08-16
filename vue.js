Vue.component('task', {

    template: '<li><slot></slot></li>'
});

Vue.component('task-list', {

    // templates must have a root element. Thats why we enclose a "task" within "div"
    template: `<div><task v-for="task in tasks">{{task.description}}</task></div>`,

    // we can't bind data directly to the data variable. We do so through a method
    data() {
        return {

            tasks: [
                {description: 'Go the store', completed: true},
                {description: 'Finish screencast', completed: false},
                {description: 'make donation', completed: false},
                {description: 'Clear inbox', completed: false},
                {description: 'make dinner', completed: false},
                {description: 'clean room', completed: true},
            ]
        };
    }
});

new Vue({

   el: '#root'
});