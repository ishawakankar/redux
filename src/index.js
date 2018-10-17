import {tokenReducer} from './reducers/reducer';
import {addIntentReducer} from './reducers/reducer';
import {addConversationReducer} from './reducers/reducer';
import {addIntentHistoryReducer} from './reducers/reducer';
import {addUserReducer} from './reducers/reducer';

export default function(state,action)
{
    switch(action.type)
    {
        case 'TOKEN_ACCESSED': 
         return tokenReducer(state,action);
        
        case 'ADD_INTENT':
        return addIntentReducer(state,action);

        case 'CONVERSATION_HISTORY': 
        return addConversationReducer(state,action);

        case 'ADD_INTENT_HISTORY':
        return addIntentHistoryReducer(state,action);

        case 'ADD_USER': 
        return addUserReducer(state,action);

         default: return state;
    }
}