import {createStore} from 'redux';

const initialState={
    counter:0
}
/**
 * @author aditya
 * @param {Object}  containing state and action
 * @return {Object} updated state
 */
const counterReducer = (state=initialState,action )=>{
    if(action.type === 'increment'){
        return{
            counter: state.counter+1
        }
    }
    if(action.type === 'decrement'){
        return{
            counter: state.counter -1
        }
    }
    if(action.type === 'incerease'){
        return{
            counter: state.counter + action.value
        }
    }
    if(action.type === 'reset'){
        return{
            counter: 0
        }
    }
    return state
};
const store = createStore(counterReducer);

export default store;