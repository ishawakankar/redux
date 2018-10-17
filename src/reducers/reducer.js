
export function tokenReducer(state,action)
{
        return Object.assign({}, state , {
          token: action.token
        });
}

export function addIntentReducer(state, action)
{
    return Object.assign({},state, {
        intent: {
            text: action.intent.text,
            slugs: action.intent.slugs,
            entities: action.intent.entities
        }
    });
}

export function addConversationReducer(state, action)
{
    return Object.assign({}, state, {
        conversation_history: [...state.conversation_history,{
            timestamp: action.conversation_history.timestamp,
            from: action.conversation_history.from,
            to: action.conversation_history.to,
            message: action.conversation_history.message
        }]
    })
}

export function addIntentHistoryReducer(state, action)
{
    return Object.assign({}, state, {
        intent_history: [...state.intent_history, action.intent]
    })
}

export function addUserReducer(state, action)
{
    return Object.assign({}, state, {
        user: [...state.user, action.user]
    })
}