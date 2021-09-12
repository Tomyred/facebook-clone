import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender/MessageSender'
import Posts from './Post/Post'
import StoryReel from './StoryReel/StoryReel'
import babydrugo from './../../assets/images/profilepictures/babydrugo.jpeg'
import soplando from './../../assets/images/profilepictures/micasopladora.jpeg'
import tomi from './../../assets/images/profilepictures/tomyintelectual.jpeg'
import random from './../../assets/images/profilepictures/random.jpeg'
import sand from './../../assets/images/stories/sand.jpg'
import db from './../../firebase'


export default function Feed() {

    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc')
        .onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) =>  ({ id: doc.id, data: doc.data() })))
        );
    });

    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            {posts.map(post => (
                <Posts
                key={post.id}
                profilePic={post.data?.profilePic}
                image={post.data?.image}
                userName={post.data?.userName}
                message={post.data?.message}
                timestamp={post.data?.timestamp}
                />
      ))}
            <Posts profilePic={babydrugo} timestamp="Hace 10 minutos" userName="Mica BG" message="¡Esto es genial!"/>
            <Posts profilePic={tomi} timestamp="Hace 20 minutos" userName="Tomás Rojo" 
            message="En los tiempos difíciles, la esperanza es algo que te das a vos mismo. Es el significado de la fuerza interior" />
            <Posts profilePic={soplando} timestamp="Hace 24 minutos" userName="Agus Thompsen" message="Si yo hubiera sido Blancanieves, la bruja no me podría haber envenenado con una manzana, conmigo seria más eficiente un pastel o cualquier otro postre" />
            <Posts profilePic={random} timestamp="Hace 29 minutos" userName="Tincho Thompsen" image={sand} message="No se lo pierdan!!!"/>
            
        </div>
    )
}
