import React from 'react'
import './Dialogs.css'

import DialogsItem from './dialogsItem/DialogsItem'
import Message from './message/Message'



function Dialogs(props) {
    return (
        <div className="dialogs">
              <div className="dialog">
                  {props.dialogsPage.dialogNames.map((e)=> <DialogsItem name={e.name} id={e.id}/> )}
              </div>
              <div className="messages">
                  {props.dialogsPage.messageItems.map((e)=> <Message message={e.message} id={e.id}/> )}                 
              </div>
              <div className="code">
                  <input type="text" placeholder="Enter your message"/>
                  <button>Отправить</button>
              </div>
            
        </div>
    )
  }
export default Dialogs