const ADD_POST = 'ADD-POST'
const POST_CHANGE = 'POST-CHANGE'


let initialState = {

    postsItems: [
    { text: 'Hi, world', id: 1, likes: 0 },
    { text: 'Im Elon Mask, really', id: 2, likes: 3 },
    { text: 'Give me some bitcoins', id: 3, likes: 10 },
    ],
    newPostText: 'hello' 
    }

let profileReducer = (state = initialState,action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            message: state.newPostText,
            likes: 0
        }
         state.postsItems.unshift(newPost)          
        
    } else if (action.type === POST_CHANGE){
        state.newPostText = action.text
        
    }
    return state
       
    }
    
export default profileReducer 

export let addPostAC = () => {
    return {
        type:'ADD-POST',
        id: 1
}
    } 


export let onPostChangeAC = (text) => {
return {
    type:'POST-CHANGE',
    text:text
}
} 