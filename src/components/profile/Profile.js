import React from 'react'
import './Profile.css'
import Posts from './posts/Posts'
import ProfileInfo from './profileInfo/ProfileInfo.js'

function Profile(props) {
    return (     
    <div className='profile'>
      <ProfileInfo/>
      <Posts 
        postsItems={props.profilePage.postsItems}  
        newPostText={props.newPostText}
        dispatch={props.dispatch}
        // addPost={props.addPost} 
        // onPostChange={props.onPostChange}
      />
    </div>   
    )
  }
export default Profile