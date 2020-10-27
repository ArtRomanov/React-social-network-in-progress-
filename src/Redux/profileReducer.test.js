const { addPostActionCreater, default: profileReducer } = require("./profileReducer")

let state = {
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
  ]
}    

it ('test to add new post', () => {
  let action = addPostActionCreater('Here`s test post')

  let newPost = profileReducer(state, action)

  expect(newPost.posts.length).toBe(3)
})