import React from 'react'
import './Dialogs.css'
import {sendMessageAC, onMessageChangeAC} from './../../data/dialogsReducer'
import DialogsItem from './dialogsItem/DialogsItem'
import Message from './message/Message'


let ref = React.createRef()


function Dialogs(props) {




  let sendMessage = () => {
    // props.sendMessage(ref.current.value) 
    
    props.dispatch(sendMessageAC())
    }
  let onMessageChange = () => {
    // props.onMessageChange(ref.current.value) 
    props.dispatch(onMessageChangeAC(ref.current.value))
    }
  console.log(props);
    return (
        <div className="dialogs">
              <div className="dialog">
                  {props.dialogsPage.dialogNames.map((e)=> <DialogsItem name={e.name} id={e.id}/> )}
              </div>
              <div className="messages">
                  {props.dialogsPage.messageItems.map((e)=> <Message message={e.message} id={e.id}/> )}                 
              </div>
              <div className="code">
                  <input onChange={onMessageChange}  ref={ref} type="text" placeholder="Enter your message"/>
                  <button onClick={sendMessage}>Отправить</button>
              </div>
            
        </div>
    )
  }
export default Dialogs