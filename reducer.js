let initialState = {
    inventory: [],
};

function reducer(state, change) {
    if (!change.inventory) {
        return state;
    }
    return {
        ...state,
        ...change,
    };
}

function dispatch(changes) {
    initialState = reducer(initialState, changes);

    return initialState;
}

module.exports = {
    setState: dispatch,
};
