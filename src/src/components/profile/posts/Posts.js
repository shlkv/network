import React from 'react'
import Post from './post/Post.js'

let postText = React.createRef()
   

function Posts(props){
    let addPost = () => {

        props.addPost(postText.current.value)
        
    }
    return(
    <div className='posts'>
        <h2>My posts</h2>
        <input ref={postText} placeholder='enter the post' />
        <button onClick={addPost}>Add post</button>
        {props.postsItems.map((e)=> <Post message={e.message} likes={e.likes}/> )}
    </div>
    )
}
export default Posts