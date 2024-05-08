const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTaskValue: "",
            taskIsVisible: true,
            isToogled: false
        }
    },
    computed: {
        taskClasses() {
            return {
                visible: this.taskIsVisible,
                hidden: !this.taskIsVisible
            }
        },
        buttonText() {
            return this.isToogled ? 'Show!' : 'Hide!';
        }
    },
    methods: {
        addTask () {
            this.tasks.push(this.enteredTaskValue);
        },
        handleToogleButton() {
            this.toogleTaskVisibility();
            this.toogleState();
        },
            toogleTaskVisibility() {
                this.taskIsVisible = !this.taskIsVisible
            },
            toogleState() {
                this.isToogled = !this.isToogled;
            }
        },
    
});

app.mount('#assignment');