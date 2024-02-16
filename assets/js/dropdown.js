 () => ({
    open: false,

    toggle() {
        this.open = ! this.open
    }
})


export default () => ({
    open: false,

    trigger: {
        ['@click']() {
            this.open = ! this.open
        },
    },

    dialogue: {
        ['x-show']() {
            return this.open
        },
    },
})