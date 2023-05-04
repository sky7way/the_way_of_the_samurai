// const messageData = [
//     {
//         id: 1,
//         message: 'What\'s your name?',
//         likesCount: 23
//     },
//     {
//         id: 2,
//         message: 'Hi! I\'m Alex!',
//         likesCount: 11
//     },
//     {
//         id: 3,
//         message: 'Nice to meet you!',
//         likesCount: 17
//     }
//   ];

import { rerenderEntireTree } from "../render";

  
//   const dialogsData = [
//     {
//         id: 1,
//         name: 'Alex'
//     },
//     {
//         id: 2,
//         name: 'Vasya'
//     },
//     {
//         id: 3,
//         name: 'Dayana'
//     }
//   ];
  
//   const postData = [
//     {
//         id: 1,
//         message: 'Hello, world!'
//     },
//     {
//         id: 2,
//         message: 'Yo!'
//     },
//     {
//         id: 3,
//         message: 'Hi, men!'
//     }
//   ];

  const state = {
    profilePage:
    {
        posts:
        
            [
                {
                    id: 1,
                    message: 'What\'s your name?',
                    likesCount: 23
                },
                {
                    id: 2,
                    message: 'Hi! I\'m Alex!',
                    likesCount: 11
                },
                {
                    id: 3,
                    message: 'Nice to meet you!',
                    likesCount: 17
                }
            ]
        },
    messagesPage:
        {
            dialogs:   
            [
                {
                    id: 1,
                    name: 'Alex',
                    // photo: 'https://gas-kvas.com/uploads/posts/2023-02/1675261807_gas-kvas-com-p-pop-art-risunki-dlya-detei-46.png'
                },
                {
                    id: 2,
                    name: 'Vasya'
                },
                {
                    id: 3,
                    name: 'Dayana'
                }
            ],    
            messages: 
            [
                {
                    id: 1,
                    message: 'Hello, world!'
                },
                {
                    id: 2,
                    message: 'Yo!'
                },
                {
                    id: 3,
                    message: 'Hi, men!'
                }
            ]
        },
        sidebar:
        {
            
        }
    };

export const addPost = (postMessage) => {
    const newPost =  {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
};

export const addMessage = (message) => {
    const newMessage = {
        id: 5,
        message: message
    };
    state.messagesPage.messages.push(newMessage);
    rerenderEntireTree(state);
}
        
  export default state;