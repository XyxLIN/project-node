

const getters = {
    doubleCount: (state) => {
        return  state.count * 2
    },
    magicalCount: (state, getters) => {
        return state.count * getters.doubleCount
    },
    fnCount: (state, getters) => {
        return (symbol) => {
            return state.count * getters.doubleCount + symbol
        }
    }
}

export default getters