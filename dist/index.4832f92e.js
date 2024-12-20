let reduxState = {
    post: 0,
    name: "ABC",
    quntity: 0
};
function reducer(state, { type, payload }) {
    switch(type){
        case "INCREMENT":
            return {
                ...state,
                post: state.post + 1,
                quntity: state.quntity + 1
            };
        case "DECRIMENT":
            return {
                ...state,
                post: state.post - 1,
                quntity: state.quntity - 1
            };
        case "INCREMENT_BY_10":
            return {
                ...state,
                post: state.post + payload,
                quntity: state.quntity + payload
            };
        default:
            return state;
    }
}
reduxState = reducer(reduxState, {
    type: "INCREMENT"
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "DECRIMENT"
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "INCREMENT_BY_10",
    payload: 10
});
console.log(reduxState);

//# sourceMappingURL=index.4832f92e.js.map
