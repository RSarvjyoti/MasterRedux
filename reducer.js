import {createStore} from 'redux';

const initiialState = {
    post : 0,
    name : "ABC",
    quntity : 0
}

function reducer(state = initiialState, {type, payload}) {
    switch(type) {
        case "INCREMENT" :
            return {...state, post: state.post + 1, quntity : state.quntity  + 1};
            break;
        case "DECRIMENT" :
            return {...state, post : state.post - 1, quntity : state.quntity  - 1};
            break;
        case "INCREMENT_BY_10" :
            return {...state, post : state.post + payload, quntity : state.quntity  + payload};
            break;
        default :
        return state;
    }
}

let store = createStore(reducer);
console.log(store); // {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: f}
console.log(store.getState()); // { post : 0,name : "ABC",quntity : 0 } : initial al
store.dispatch({type : "INCREMENT"});
console.log(store.getState()); // { post : 1,name : "ABC",quntity : 1 }
store.dispatch({type : "DECRIMENT"});
console.log(store.getState()); // {post: 0, name: 'ABC', quntity: 0}
store.dispatch({type : "INCREMENT_BY_10", payload : 10});
console.log(store.getState()); // {post: 10, name: 'ABC', quntity: 10}