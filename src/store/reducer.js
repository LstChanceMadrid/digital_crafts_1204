
const initialState = {
    kitties : []

}

const reducer = (state = initialState, action) => {

    if (action.type === "MORE_KITTIES") {
        return {
            ...state,
            kitties : state.kitties.concat(action.value)
        }
    }

    return state
}

export default reducer