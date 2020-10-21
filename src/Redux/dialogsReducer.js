const SEND_MESSAGE = 'SEND-MESSAGE',
  UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
  messages: [{
      id: 1,
      message: 'Hi'
    },
    {
      id: 2,
      message: 'How r u'
    },
    {
      id: 3,
      message: 'Fine'
    },
    {
      id: 4,
      message: 'Where r u?'
    },
    {
      id: 5,
      message: 'Maybe we can have a talk?'
    },
    {
      id: 6,
      message: 'Probably...'
    }
  ],
  newMessageBody: '',
  dialogs: [{
      id: 1,
      name: 'Dimych',
      userpic: 'https://yt3.ggpht.com/a/AATXAJzN14Z-a_MoxvJ17eSgQgiaOoih-HkjejtouQ=s900-c-k-c0xffffffff-no-rj-mo'
    },
    {
      id: 2,
      name: 'Andrey',
      userpic: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Sveta',
      userpic: 'https://randomuser.me/api/portraits/women/7.jpg'
    },
    {
      id: 4,
      name: 'Sasha',
      userpic: 'https://randomuser.me/api/portraits/women/79.jpg'
    },
    {
      id: 5,
      name: 'Viktor',
      userpic: 'https://randomuser.me/api/portraits/men/27.jpg'
    },
    {
      id: 6,
      name: 'Valera',
      userpic: 'https://randomuser.me/api/portraits/men/34.jpg'
    }
  ]
}

const dialogReducer = (state = initialState, action) => {


  switch (action.type) {
    case SEND_MESSAGE:
      return {
      ...state,
      newMessageBody: '',
      messages: [
          ...state.messages, {
          id: 7,
          message: state.newMessageBody
          }
      ]
      }
    
    case UPDATE_NEW_MESSAGE_BODY: 
    return {
      ...state,
      newMessageBody: action.newText
    }
    
    default:
      return state;
  };
}

export const addMessageCreater = () => ({
  type: SEND_MESSAGE
});
export const updateNewMessageBodyCreator = (text) =>
  ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newText: text
  });

export default dialogReducer;