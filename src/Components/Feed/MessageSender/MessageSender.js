import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React, { useState } from 'react'
import { useStateValue } from '../../../StateProvider';
import './MessageSender.css'
import db from './../../../firebase'

function MessageSender() {

    const [{user}] = useStateValue();

    const [message, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.length === 0) {
          console.log("No");
        } else {
          db.collection('posts').add({
            image: imageUrl,
            message: message,
            profilePic: user?.picture,
            userName: user?.name,
            timestamp:"Hace un momento"
            
          });
        }
    
        setInput("");
        setImageUrl("");
      };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user?.picture}/>
                <form>
                    <input 
                    value={message}
                    onChange={e => setInput(e.target.value)}
                    className="messageSender__input" 
                    placeholder={`What´s on your mind, ${user?.given_name}?`} />
                    <input
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    placeholder="image URL (Optional)" />
                    <button onClick={handleSubmit} 
                    type="submit" >Submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                <Videocam style={{color:"red"}} />  
                <h3>Live video</h3>  
                </div> 
                <div className="messageSender__option">
                    <PhotoLibrary style={{color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                <InsertEmoticon style={{color:"orange"}} />
                <h3>Feeling/Activity</h3>  
                </div> 
            </div>
        </div>
    )
}

export default MessageSender
