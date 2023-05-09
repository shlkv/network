import React from 'react'
import Post from './post/Post.js'
import {addPostAC, onPostChangeAC} from '../../../data/profileReducer'




let postText = React.createRef()
   

function Posts(props){

  
        

    let addPost = () => {
        // props.addPost(postText.current.value)
        props.dispatch(addPostAC())
        postText.current.value=''
    }
    let onPostChange = () => {
        // props.onPostChange(postText.current.value) 
        props.dispatch(onPostChangeAC(postText.current.value))
    }
        console.log(props);
    return(
    <div className='posts'>
        <h2>My posts</h2>
        <input onChange={onPostChange} value={props.newPostText} ref={postText} placeholder='enter the post' />
        <button onClick={addPost}>Add post</button>
        {props.postsItems.map((e)=> <Post message={e.message} likes={e.likes}/> )}
        
    </div>
    )
}
export default Posts