import { Avatar } from '@material-ui/core'
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUp } from '@material-ui/icons'
import React from 'react'
import { Fragment } from 'react'
import './Post.css'

function Posts({profilePic, image, userName, timestamp, message}) {
    return (
        <Fragment>{profilePic && userName && (message || image || timestamp) && <div className="post">
            
            <div className="post__top">
                <Avatar
                src={profilePic}
                className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{userName}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                {image && <img src={image} alt="post"></img>}
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUp/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline/>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe/>
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircle/>
                    <ExpandMoreOutlined/>
                </div>
            </div>
        </div>}</Fragment>
       
    )
}

export default Posts
