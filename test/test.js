import { createStore } from 'redux';
import chai from 'chai';
import deepFreeze from 'deep-freeze';
import mocha from 'mocha';
import reducer from '../src/index';

const should = chai.should();

describe('BotApp', function()
{
    it('Token Access', function()
    {
        const initialState = deepFreeze({
            user: "",
            token: "",
            conversation_history: [{}],
            intent: {
                text: "",
                slugs: [],
                entities: []
            },
            intent_history: [{}]
        })
        const store = createStore(reducer, initialState)

        store.dispatch({
            type: "TOKEN_ACCESSED",
            token: '9889997660'
    })

    console.log("state updated", store.getState());
    })

    it('Add Intent', function()
    {
        const initialState = deepFreeze({
            user:"",
            token: "",
            conversation_history: [{}],
            intent: {
                text: '',
                slugs: '',
                entities: []
            },
            intent_history: [{}]
        })
        const store = createStore(reducer, initialState)

        store.dispatch({
            type: "ADD_INTENT",
            intent: {
                text: 'Hello User',
                slugs: ['greetings'] 
            }
    })

    console.log("state updated", store.getState());
    })

    it('Conversation History', function()
    {
        const initialState = deepFreeze ({
            user: "",
            token:"",
            conversation_history: [{}],
            intent: {
                text: '',
                slugs: '',
                entities: []
            },
            intent_history: [{}]
        })
        const store = createStore(reducer, initialState)

        store.dispatch({
            type: "CONVERSATION_HISTORY",
            conversation_history: {
                timestamp: new Date(),
                from: 'Bot',
                to: 'User',
                message: 'Hello, World!'
            }
        })
      console.log("state updated", store.getState());
    })

    it('Add Intent History', function()
    {
        const initialState = deepFreeze ({
            user: "",
            token: "",
            conversation_history: [{}],
            intent: [{}],
            intent_history: [{}]
        })
        const store = createStore(reducer, initialState)

        store.dispatch({
            type: "ADD_INTENT_HISTORY",
            intent_history: {
                start: 'greeting',
                message: 'hello',
            }
        })
        console.log("state updated", store.getState());
    })

    it('Add User', function()
    {
        const initialState = deepFreeze({
            user: "",
            token: "",
            conversation_history: [{}],
            intent: [{}],
            intent_history: [{}]
        })
        const store = createStore(reducer,initialState)

        store.dispatch({
            type: "ADD_USER",
            user: 'New User',
        })
        console.log("state updated", store.getState());
    })
})
