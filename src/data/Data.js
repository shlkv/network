import profileReduser from "./profileReducer"
import dialogReduser from "./dialogsReducer"



// const ADD_POST = 'ADD-POST'
// const POST_CHANGE = 'POST-CHANGE'
// const SEND_MESSAGE = 'SEND-MESSAGE'
// const MESSAGE_CHANGE = 'MESSAGE-CHANGE'

let store = {
     _state : {

        profilePage: {
            postsItems: [
                {message: 'Hi, world', likes: 0},
                {message: 'I`m Elon Mask, really', likes: 3},
                {message: 'Give me some bitcoins', likes: 10}
              ], 
              newPostText:'hello'
    
    
        },
        dialogsPage: {
            dialogNames: [
                {name:'Ivan Ivanov', id: 1},
                {name:'Ilon Mask', id: 2},
                {name:'Bill Gates', id: 2}
              ],
               messageItems:  [
                {message:'Hi!', id: 1},
                {message:'Go on the Mars', id: 1},
                {message:'Where is my chip?', id: 1}
              ],
              newMessageText:'Hello'
         },
         navMenu: {
            friends: [
                {ava: 1, name: 'Vasya'},
                {ava: 1, name: 'Nikita'},
                {ava: 1, name: 'Oleg'}
            ]    
          } 
           
    },
    
    
    
    // addPost(postText) {
    //     let newPost = {
    //         message: postText,
    //         likes: 0
    //     }
    //     this._state.profilePage.postsItems.unshift(newPost)
        
    //     this.rerenderTree(this._state)
    // },
    
    
    // sendMessage (message) {
    //     let newMessage= {
    //         message: message,
    //         id: 4
    //     }
    //         this._state.dialogsPage.messageItems.unshift(newMessage)
    //         this.rerenderTree(this._state) 
    // },
    // onPostChange (text) {
    //         this._state.profilePage.newPostText = text
    //         this.rerenderTree(this._state)
    // },
    // onMessageChange (text)  {
    //         this._state.dialogsPage.newMessageText = text
    //         this.rerenderTree(this._state)
    // },
    
    rerenderTree() {
            console.log('It is fake function'); 
    },
    subscribe (observer)  {
            this.rerenderTree = observer
    },
    getState(){
            return this._state
    },

    dispatch(action){

        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this.rerenderTree(this._state)

        this._state.dialogsPage = dialogReduser(this._state.dialogsPage, action)
        this.rerenderTree(this._state)

         



        // if (action.type ===  SEND_MESSAGE){
        //     let newMessage= {
        //         message:this._state.dialogsPage.dialogNames.newMessageText,
        //         id: 4
        //     }
        //         this._state.dialogsPage.messageItems.unshift(newMessage)
        //         this.rerenderTree(this._state) 
        // }else if (action.type === MESSAGE_CHANGE){
        //     this._state.dialogsPage.dialogNames.newMessageText = action.text
        //     this.rerenderTree(this._state)
        // }
    }

}
// export let addPostAC = () => {
//     return {
//         type:'ADD-POST',
//         id: 1
// }
//     } 


//     export let onPostChangeAC = (text) => {
// return {
//     type:'POST-CHANGE',
//     text:text
// }
// } 

// export let sendMessageAC = () => {
//     return {
//         type:'SEND-MESSAGE',
//         id: 1
//     }
// }

// export let onMessageChangeAC = (text) => {
//       return {
//         type:'MESSAGE-CHANGE',
//         text:text
//       }
//     } 



    export default store