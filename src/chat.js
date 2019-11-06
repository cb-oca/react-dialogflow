import {ApiAiClient} from 'api-ai-javascript';
import {applyMiddleware, createStore} from 'redux';
const accessToken = 'b9410acf93b3497c9691627588fd6921';
const client = new ApiAiClient({accessToken});

const ON_MESSAGE = 'ON_MESSAGE';
export const sendMessage = (text, sender = 'user') => ({
  type: ON_MESSAGE,
  payload: {text, sender}
})

const messageMiddleware = () => next => action => {
  next(action)

  if (action.type === ON_MESSAGE) {
    const {text} = action.payload;
    client.textRequest(text).then(onSuccess)
    function onSuccess(response) {
      console.log('Msg Response', response.result.fulfillment.speech);

      next(sendMessage(response.result.fulfillment.speech, 'bot'));
    }
  }
}

const initState = [{text: 'hey'}];
const messageReducer = (state = initState, action) => {
  switch(action.type) {
    case ON_MESSAGE:
      return [...state, action.payload]
    default:
      return state  
  }
}

export const store = createStore(messageReducer, applyMiddleware(messageMiddleware))