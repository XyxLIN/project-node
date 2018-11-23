


const module = {
    state: {
        message: 'hello world'
    },
    actions: {
        randomChange (context) {
            context.commit('changeMessage')
        }
    },
    mutations: {
        changeMessage (state) {
            state.message = 'Hello' + Date.now()
        }
    }
}

export default module