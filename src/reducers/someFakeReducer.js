let initialState = {

    someFakeData: true
}


export default function toggle(state = initialState, action) {

    if (action.type === "DO_THING") {
        console.log(state.someFakeData);

        if (state.someFakeData) {
            return Object.assign({}, state, { someFakeData: false})
        } else {
            return Object.assign({}, state, { someFakeData: true })
        }

    }

    return state
}

