// import dialogsReducer from "./dialogsReducer";
// import navBarFriendsReducer from "./navBarFriendsReducer";
// import profileReducer from "./profileReducer";

let store = {
  _state: {
    profilePage: {
      posts: [{
          id: 1,
          message: 'Hi how r u?',
          likesCount: 12
        },
        {
          id: 2,
          message: 'Yo',
          likesCount: 10
        }
      ],
      newPostText: ''
    },
    dialogsPage: {
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
    },
    navBarFriends: {
      friendsItem: [{
          id: 1,
          name: 'Anya',
          alt: 'userpic',
          userpic: 'https://randomuser.me/api/portraits/women/55.jpg'
        },
        {
          id: 2,
          name: 'Vasya',
          alt: 'userpic',
          userpic: 'https://randomuser.me/api/portraits/men/60.jpg'
        },
        {
          id: 3,
          name: 'Nikita',
          alt: 'userpic',
          userpic: 'https://randomuser.me/api/portraits/men/3.jpg'
        }
      ]
    }

  },
  _callSubscriber() {
    console.log('state changed')
  },
  getState() {
    return this._state;
  },
  subscribe (observer)  {
    this._callSubscriber = observer;
  },
  // dispatch(action) {
  //   this._state.profilePage=profileReducer(this._state.profilePage, action)
  //   this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action)
  //   this._state.navBarFriends=navBarFriendsReducer(this._state.navBarFriends, action)
    
  //   this._callSubscriber(this._state);
  // }
}
      

export default store;