const app = Vue.createapp({
    data() {
        return {
            tasks: [],
            enteredTaskValue: "",
            taskIsVisible: true
        }
    },
    methods: {
        addTask () {
            this.tasks.push(this.enteredTaskValue);
        },
         toogleTaskVisibility() {
             this.taskIsVisible = !this.taskIsVisible
         }
    }
});

app.mount('#assignment');