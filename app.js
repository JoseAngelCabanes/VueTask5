const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTaskValue: "",
            taskIsVisible: true
        }
    },
    computed: {
        taskClasses() {
            return {
                visible: this.taskIsVisible,
                hidden: !this.taskIsVisible
            }
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