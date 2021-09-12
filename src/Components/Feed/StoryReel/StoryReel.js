import React from 'react'
import Story from './Story/Story'
import './StoryReel.css'
import tienda from './../../../assets/images/stories/tienda.jpeg'
import beso from './../../../assets/images/stories/beso.jpeg'
import drugo from './../../../assets/images/stories/drugo.jpeg'
import random from './../../../assets/images/stories/random.jpeg'
import sopando from './../../../assets/images/stories/sopando.jpeg'

import babydrugo from './../../../assets/images/profilepictures/babydrugo.jpeg'
import micasopladora from './../../../assets/images/profilepictures/micasopladora.jpeg'
import randompibe from './../../../assets/images/profilepictures/random.jpeg'
import tiendaropa from './../../../assets/images/profilepictures/tiendaropa.jpeg'
import tomyintelectual from './../../../assets/images/profilepictures/tomyintelectual.jpeg'


function StoryReel() {
    return (
        <div className="storyReel">
            <Story image={tienda} profileSrc={tiendaropa} title="Otra Chance" className="storyReel__story"/>
            <Story image={beso} profileSrc={tomyintelectual} title="Tomás Rojo" className="storyReel__story"/>
            <Story image={drugo} profileSrc={babydrugo} title="Mica BG" className="storyReel__story"/>
            <Story image={random} profileSrc={randompibe} title="Tincho Thomsen" className="storyReel__story"/>
            <Story image={sopando} profileSrc={micasopladora} title="Agus Thomsen" className="storyReel__story"/>
        </div>
    )
}

export default StoryReel;

