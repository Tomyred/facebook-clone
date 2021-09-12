import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className="widgets">
            <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFacebookforDevelopers%2F&tabs=timeline&width=240&height=15008&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="240"
            height="100%"
            style={{border:"none", overflow:"hidden"}}
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media"
            title="bowie">
            </iframe>
        </div>
    )
}

export default Widgets
